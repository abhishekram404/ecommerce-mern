import React, { useState, useCallback } from "react";
import "styles/Products.scss";
import ProductAdmin from "components/ProductAdmin";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import { IoMdAdd } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import { debounce } from "lodash";
import { isEmptyArray } from "utils/helpers.js";
import useFetchAllProducts from "utils/useFetchAllProducts";
export default function Products() {
  const { url } = useRouteMatch();
  const [filterResults, setFilterResults] = useState([]);
  const [resultMessage, setResultMessage] = useState({
    noOfResult: undefined,
    message: "",
  });
  let { data: products, isSuccess, isLoading, refetch } = useFetchAllProducts();

  const refreshFetchedProducts = () => {
    refetch();
  };
  const searchProduct = async (query) => {
    setResultMessage({
      noOfResult: undefined,
      message: "",
    });
    const pattern = new RegExp(`${query}.*`, "gi");
    let r = await products.filter(
      (product) =>
        pattern.test(product.name.toLowerCase()) ||
        pattern.test(product.description.toLowerCase())
    );
    setResultMessage({
      noOfResult: r.length,
      message: r.length
        ? `${r.length} search results found for query '${query}'`
        : `No search results found for query ${query}`,
    });
    setFilterResults(r);
  };

  const filterByCategory = (category) => {
    setResultMessage({
      noOfResult: undefined,
      message: "",
    });
    let r = products.filter((product) => product.category.includes(category));
    setFilterResults(r);
    setResultMessage({
      message: r.length
        ? `${r.length} search results found for category ${category}`
        : `No search results found for category ${category}`,
    });
  };
  const debouncedSearch = useCallback(debounce(searchProduct, 500), [products]);

  if (isSuccess) {
    products = products.data.details;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Switch>
      <Route path={`${url}/`} exact>
        <div className="display products p-3">
          <div className="row align-items-center">
            <div className="col-3">
              <h2 className="page-title">
                Products ({products && products.length})
              </h2>
            </div>

            <form className="col-4 d-flex align-items-center">
              <label htmlFor="search" className="form-label m-0">
                Search product : &nbsp;
              </label>
              <input
                type="search"
                className="form-control form-control-sm w-auto"
                onChange={(e) => debouncedSearch(e.target.value)}
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
                onChange={(e) => filterByCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Food & drinks">Food & drinks</option>
                <option value="Electronics">Electronics</option>
                <option value="Beauty & cosmetics">Beauty & cosmetics</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Clothings">Clothings</option>
                <option value="Smartphones">Smartphones</option>
              </select>
            </form>

            <div className="col-1">
              <button
                className="refresh-button"
                onClick={refreshFetchedProducts}
                title="Refresh products"
              >
                <MdRefresh />
              </button>
            </div>
          </div>

          <hr />
          <p className="p-1">{resultMessage.message}</p>
          <div className="products-list ">
            <Link to={`${url}/add`} className="add-new-product-btn product">
              <IoMdAdd className="add-icon mb-4" />
              <h4>Add a new product</h4>
            </Link>
            {!isEmptyArray(filterResults)
              ? filterResults.map((result) => (
                  <ProductAdmin {...result} key={result._id} />
                ))
              : !isEmptyArray(products) &&
                products.map((product) => (
                  <ProductAdmin {...product} key={product._id} />
                ))}
          </div>
        </div>
      </Route>
      <Route path={`${url}/edit/:id`} component={EditProduct} />
      <Route path={`${url}/add`} component={() => <EditProduct mode="add" />} />
    </Switch>
  );
}
