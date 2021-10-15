import ImageDisplay from "components/ImageDisplay";
import React, { useState } from "react";
import { useParams } from "react-router";
import "styles/EditProduct.scss";

export default function EditProduct() {
  const { id } = useParams();
  return (
    <div className="edit-product p-3">
      <h2 className="page-title mb-0">Edit product</h2>
      <hr />
      <form className="card p-4">
        <div className="row gx-4">
          <div className="col left-form border-end">
            <h3 className="page-title text-center">Product details</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Price <small>(per item)</small>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  defaultValue="all"
                >
                  <option value="all">All</option>
                  <option value="foods&drinks">Foods & drinks</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty&cosmetics">Beauty & cosmetics</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="stock" className="form-label">
                  Stock quantity
                </label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="tags" className="form-label">
                  Tags <small>(comma separated)</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="eg. chilled, summer, relaxing"
                />
              </div>
              <div className="col"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="7"
                className="form-control"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="btn btn-light btn-lg delete-btn w-100 border mb-2 text-secondary">
                Delete this product
              </button>
              <button
                type="submit"
                className="btn btn-lg submit-btn w-100 border"
              >
                Update product
              </button>
            </div>
          </div>
          {/* <hr /> */}
          <div className="col-7 right-form ">
            <h3 className="page-title text-center">Product Images</h3>
            <ImageDisplay upload={true} />
          </div>
        </div>
      </form>
    </div>
  );
}
