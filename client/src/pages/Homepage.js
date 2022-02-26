import ProductCustomer, {
  ProductCustomerSkeleton,
} from "components/ProductCustomer";
import React, { useContext } from "react";
import "styles/Homepage.scss";
import categoryImage1 from "assets/gummy-coffee 1.svg";
import RoleRestrict from "components/RoleRestrict";
import { useDispatch } from "react-redux";
import { isEmptyArray } from "utils/helpers";
import { useQuery } from "react-query";
import axios from "axios";
import AppContext from "utils/AppContext";
import { ERROR } from "redux/constants";
export default function Homepage() {
  const dispatch = useDispatch();

  const { isUserLoggedIn, categories } = useContext(AppContext);
  let {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("products", () => axios.get("/product"), {
    enabled: !isUserLoggedIn,
    onError: (error) => {
      dispatch({ type: ERROR, payload: error?.response?.data?.message });
    },
  });
  if (isSuccess) {
    products = products.data.details;
  }

  return (
    <RoleRestrict onlyFor={["C"]}>
      <div className="homepage">
        <div className="page-1">
          <h2 className="page-title">Our featured products</h2>
          <div className="products-list">
            {(isSuccess && isEmptyArray(products)) || isError ? (
              <h4>Nothing here</h4>
            ) : isLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (
                <ProductCustomerSkeleton key={i} />
              ))
            ) : (
              products.map((product) => (
                <ProductCustomer {...product} key={product._id} />
              ))
            )}
          </div>
          <button className="btn mx-auto my-4 px-4 show-more-btn">
            Show more
          </button>
        </div>

        <div className="page-2">
          <h2 className="page-title">Exciting offers</h2>
          <div className="products-list">
            {(isSuccess && isEmptyArray(products)) || isError ? (
              <h4>Nothing here</h4>
            ) : isLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (
                <ProductCustomerSkeleton key={i} />
              ))
            ) : (
              products.map((product) => (
                <ProductCustomer {...product} key={product._id} />
              ))
            )}
          </div>
        </div>

        <div className="page-3">
          <h2 className="page-title">Browse by category</h2>
          <div className="categories">
            {categories &&
              categories.map((category, i) => (
                <CategoryItem category={category} key={i} />
              ))}
          </div>
        </div>
      </div>
    </RoleRestrict>
  );
}

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <div className="img-cont">
        <img src={categoryImage1} alt="" />
      </div>
      <h5 className="category-name text-center p-4">{category}</h5>
    </div>
  );
};
