import React from "react";
import { Link } from "react-router-dom";
import "styles/Product.scss";
import placeholderImage from "assets/phone.jfif";
import ReactStars from "react-rating-stars-component";
export default function ProductCustomer() {
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
      <div className="row rating-row">
        <div className="ratings col">
          <ReactStars />
        </div>
        <div className="col-4 text-end text-success">Available</div>
      </div>
      <div className="row seller-row">
        <div className="col seller-name">Seller :</div>
      </div>
      <div className="row buttons-row mt-2">
        <div className="col">
          <Link to="chat-with-seller" className="chat-btn btn w-100">
            Chat with seller
          </Link>
        </div>
        <div className="col">
          <Link to="/add-to-cart" className="add-to-cart-btn btn w-100">
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
