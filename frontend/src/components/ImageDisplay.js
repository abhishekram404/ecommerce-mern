import React, { useState } from "react";
import phone from "assets/phone.jfif";
import mac from "assets/mac.jpg";
import mac2 from "assets/mac2.jpg";
import shoe from "assets/shoe.jfif";
import camera from "assets/camera.jpg";
import "styles/ImageDisplay.scss";
import clsx from "clsx";
export default function ImageDisplay(props) {
  const [images, setImages] = useState([phone, mac, mac2, shoe, camera]);
  const [activeImage, setActiveImage] = useState(() => images[0] ?? null);

  return (
    <>
      <div className="image-display border p-3">
        <div className="image-preview">
          <img src={activeImage ? activeImage : images[0]} alt="" />
        </div>
        <div className="img-choose border p-3">
          <div className="options">
            {images.map((image) => (
              <img
                src={image}
                alt=""
                className={clsx(activeImage === image && "active-image")}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      {props.upload && (
        <div className="img-input p-3 mt-4 ">
          <input
            type="file"
            name="productImage"
            id="productImage"
            className="form-control"
          />
          <h5>+ Upload new images </h5>
        </div>
      )}
    </>
  );
}
