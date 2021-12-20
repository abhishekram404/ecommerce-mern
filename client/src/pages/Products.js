import React from "react";
import "styles/Products.scss";
import ProductAdmin from "components/ProductAdmin";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import { IoMdAdd } from "react-icons/io";

export default function Products() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/`} exact>
        <div className="display products p-3">
          <div className="row align-items-center">
            <div className="col-4">
              <h2 className="page-title">Products (10)</h2>
            </div>

            <form className="col-4 d-flex align-items-center">
              <label htmlFor="search" className="form-label m-0">
                Search product : &nbsp;
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-auto"
              />
            </form>

            <form className="col-4 category-filter d-flex align-items-center">
              <label htmlFor="category" className="form-label m-0">
                Category : &nbsp;
              </label>
              <select
                className="form-select form-select-sm w-50"
                id="category"
                defaultValue="all"
              >
                <option value="all">All</option>
                <option value="foods&drinks">Foods & drinks</option>
                <option value="electronics">Electronics</option>
                <option value="beauty&cosmetics">Beauty & cosmetics</option>
              </select>
            </form>
          </div>

          <hr />
          <div className="products-list ">
            <Link to={`${url}/add`} className="add-new-product-btn product">
              <IoMdAdd className="add-icon mb-4" />
              <h4>Add a new product</h4>
            </Link>
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
          </div>
        </div>
      </Route>
      <Route path={`${url}/edit/:id`} component={EditProduct} />
      <Route path={`${url}/add`} component={() => <EditProduct mode="add" />} />
    </Switch>
  );
}