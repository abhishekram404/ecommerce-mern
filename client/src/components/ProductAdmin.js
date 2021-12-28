import React from "react";
import "styles/Product.scss";
import fallbackImage from "assets/shopy_fallback.svg";

import { Link, useRouteMatch } from "react-router-dom";
export default function ProductAdmin(props) {
  const { url } = useRouteMatch();
  return (
    <div className="product">
      <div className="row img-row">
        <div className="img-cont">
          <img src={props?.productImages[0] ?? fallbackImage} alt="" />
        </div>
      </div>
      <div className="row detail-row align-items-center">
        <div className="product-name col-9">
          {" "}
          {props.name.length > 25
            ? props.name.slice(0, 25) + "..."
            : props.name}
        </div>
        <div className="product-price col-3 text-end">${props.price}</div>
      </div>
      <div className="row stock-row">
        <div className="stock">Stock Quantity : {props.stock} </div>
      </div>
      <div className="row category-row">
        <div className="col">
          Category : <span className="category"> {props.category}</span>
        </div>
      </div>
      <div className="row buttons-row mt-2">
        <div className="col">
          <Link to={`${url}/edit/2`} className="edit-btn btn w-100">
            Edit product
          </Link>
        </div>
        <div className="col">
          <Link to="/view-insights" className="view-insights-btn btn w-100">
            View insights
          </Link>
        </div>
      </div>
    </div>
  );
}
