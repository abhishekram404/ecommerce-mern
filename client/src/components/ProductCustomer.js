import React from "react";
import { Link } from "react-router-dom";
import "styles/Product.scss";
import fallbackImage from "assets/shopy_fallback.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactStars from "react-rating-stars-component";
export default function ProductCustomer(props) {
  return (
    <div className="product">
      <div className="row img-row">
        <div className="img-cont">
          <img src={props?.productImages[0] ?? fallbackImage} alt="" />
        </div>
      </div>
      <div className="row detail-row align-items-center">
        <div className="product-name col-10">
          {props.name.length > 27
            ? props.name.slice(0, 27) + "..."
            : props.name}
        </div>
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

export function ProductCustomerSkeleton() {
  return (
    <div className="product">
      <Skeleton height={200} borderRadius={10} />
      <br />
      <div className="row mb-3">
        <div className="col-9">
          <Skeleton count={1} width="90%" inline={true} />
        </div>
        <div className="col-3">
          <Skeleton count={1} inline={true} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-7">
          <Skeleton count={1} width="90%" inline={true} />
        </div>
        <div className="col-5">
          <Skeleton count={1} width="100%" inline={true} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Skeleton count={1} className="py-3" borderRadius={10} />
        </div>
        <div className="col">
          <Skeleton count={1} className="py-3" borderRadius={10} />
        </div>
      </div>
    </div>
  );
}
