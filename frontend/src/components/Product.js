import React from "react";
import "styles/Product.scss";
import placeholderImage from "assets/phone.jfif";
import ReactStars from "react-rating-stars-component";
export default function Product() {
  return (
    <div className="product">
      <div className="row img-row">
        <div className="img-cont">
          <img src={placeholderImage} alt="" />
        </div>
      </div>
      <div className="row detail-row align-items-center">
        <div className="product-name col-10">Red stationary vase</div>
        <div className="product-price col-2">$25</div>
      </div>
      <div className="row">
        <div className="ratings col">
          <ReactStars />
        </div>
      </div>
      <div className="row seller-row">
        <div className="col seller-name">Seller :</div>
      </div>
      <div className="row buttons-row mt-2">
        <div className="col chat-btn btn mx-2">Chat with seller</div>
        <div className="col add-to-cart-btn btn mx-2">Add to cart</div>
      </div>
    </div>
  );
}
