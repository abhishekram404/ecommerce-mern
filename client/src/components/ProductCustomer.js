import React from "react";
import { Link } from "react-router-dom";
import "styles/Product.scss";
import placeholderImage from "assets/phone.jfif";
import ReactStars from "react-rating-stars-component";
export default function ProductCustomer(props) {
  console.log(props);
  return (
    <div className="product">
      <div className="row img-row">
        <div className="img-cont">
          <img
            src={
              props?.productImages ? props.productImages[0] : placeholderImage
            }
            alt=""
          />
        </div>
      </div>
      <div className="row detail-row align-items-center">
        <div className="product-name col-10">{props.name}</div>
        <div className="product-price col-2">${props.price}</div>
      </div>
      <div className="row rating-row">
        <div className="ratings col">
          <ReactStars />
        </div>
        {props.stock > 10 ? (
          <div className="col-4 text-end text-success">Available</div>
        ) : (
          <div className="col-4 text-end text-danger">
            Only {props.stock ?? "few"} left
          </div>
        )}
      </div>
      {/* <div className="row seller-row">
        <div className="col seller-name">Seller :</div>
      </div> */}
      <div className="row buttons-row mt-2">
        <div className="col">
          <Link to="view-product" className="chat-btn btn w-100">
            View product
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
