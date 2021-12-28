import ProductCustomer, {
  ProductCustomerSkeleton,
} from "components/ProductCustomer";
import React, { useEffect } from "react";
import "styles/Homepage.scss";
import categoryImage1 from "assets/gummy-coffee 1.svg";
import RoleRestrict from "components/RoleRestrict";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts } from "redux/actions/productActions";
import { isEmptyArray } from "utils/helpers";
export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  const { products, isFetched, categories } = useSelector(
    (state) => state.product
  );
  return (
    <RoleRestrict onlyFor={["C"]}>
      <div className="homepage">
        <div className="page-1">
          <h2 className="page-title">Our featured products</h2>
          <div className="products-list">
            {isFetched && isEmptyArray(products) ? (
              <h4>Nothing here</h4>
            ) : isFetched === null ? (
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
            {isFetched && isEmptyArray(products) ? (
              <h4>Nothing here</h4>
            ) : isFetched === null ? (
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
