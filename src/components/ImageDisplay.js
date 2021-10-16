import React, { useState, useEffect } from "react";
import phone from "assets/phone.jfif";
import mac from "assets/mac.jpg";
import mac2 from "assets/mac2.jpg";
import shoe from "assets/shoe.jfif";
import camera from "assets/camera.jpg";
import "styles/ImageDisplay.scss";
import clsx from "clsx";
import { Field } from "formik";
export default function ImageDisplay({ fileProp, upload }) {
  const [images, setImages] = useState([phone, mac, mac2, shoe, camera]);
  const [activeImage, setActiveImage] = useState(() => images[0] ?? null);
  const [chosenImages, setChosenImages] = useState([]);

  const handleFileInputChange = async (inputFile) => {
    if (images.length >= 10) {
      return alert("Can't upload more than 10 product images. ");
    }
    await generatePreviewURL(inputFile);
  };

  const generatePreviewURL = async (file) => {
    const reader = new FileReader();
    await reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await setImages([...images, reader.result]);
      await setChosenImages([...chosenImages, reader.result]);
    };
  };

  useEffect(() => {
    fileProp(chosenImages);
  }, [chosenImages]);

  return (
    <>
      <div className="image-display border p-3">
        <div className="image-preview">
          <img src={activeImage ? activeImage : images[0]} alt="" />
        </div>
        <div className="img-choose border p-3">
          <div className="options">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt=""
                className={clsx(activeImage === image && "active-image")}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      {upload && (
        <div className="img-input p-3 mt-4 ">
          <Field
            type="file"
            name="productImages"
            id="productImages"
            className="form-control"
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
