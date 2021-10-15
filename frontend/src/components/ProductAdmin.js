import React from "react";
import "styles/Product.scss";
import placeholderImage from "assets/phone.jfif";
import { Link, useRouteMatch } from "react-router-dom";
export default function ProductAdmin() {
  const { url } = useRouteMatch();
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
      <div className="row stock-row">
        <div className="stock">Stock Quantity : 100</div>
      </div>
      <div className="row category-row">
        <div className="col">
          Category : <span className="category">Sports</span>
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
