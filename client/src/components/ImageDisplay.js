import React, { useState, useEffect } from "react";
import "styles/ImageDisplay.scss";
import clsx from "clsx";
import { Field } from "formik";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ImageDisplay({ fileProp, upload }) {
  const [images, setImages] = useState([]);

  const [activeImage, setActiveImage] = useState(() => images[0] ?? null);
  const [chosenImages, setChosenImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileInputChange = async (inputFile) => {
    try {
      if (images.length > 8) {
        return alert("Can't upload more than 8 product images. ");
      }

      // await Array.from(inputFiles).forEach(async (inputFile, index) => {
      setUploading(true);
      let formData = await new FormData();
      await formData.append("file", inputFile);
      formData.append("upload_preset", "shopy_cloudinary");
      formData.append("cloud_name", "abhishekram");

      let uploadedImage = await axios.post(
        "https://api.cloudinary.com/v1_1/abhishekram/image/upload",
        formData,
        {
          withCredentials: false,
        }
      );
      const { data } = await uploadedImage;

      await setImages([...images, await data.secure_url]);
      setUploading(false);
      // });
    } catch (error) {
      setUploading(false);

      console.log(error.message);
    }
  };

  useEffect(() => {
    fileProp(images);
  }, [images]);

  return (
    <>
      <div className="image-display border p-3">
        {images.length > 0 || uploading ? (
          <>
            <div className="image-preview">
              {uploading ? (
                <Skeleton height={300} width={300} />
              ) : (
                <img src={activeImage ? activeImage : images[0]} alt="" />
              )}
            </div>
            <div className="img-choose border p-2">
              <div className="options">
                {images.length > 0 &&
                  images.map((image, index) => (
                    <img
                      src={image}
                      key={index}
                      alt=""
                      className={clsx(activeImage === image && "active-image")}
                      onClick={() => setActiveImage(image)}
                    />
                  ))}
                {uploading && <Skeleton height={100} width={100} />}
              </div>
            </div>
          </>
        ) : (
          <div className="image-display">
            <h6>Upload product images to attract customers.</h6>
          </div>
        )}
      </div>
      {upload && (
        <div className="img-input p-3 mt-4 ">
          <Field
            type="file"
            // multiple={true}
            name="productImages"
            id="productImages"
            className="form-control"
            accept="image/*"
            onChange={(e) => {
              upload && handleFileInputChange(e.target.files[0]);
            }}
          />
          <h5>+ Upload new images </h5>
        </div>
      )}
    </>
  );
}
