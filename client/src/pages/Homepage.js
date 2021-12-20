import ProductCustomer from "components/ProductCustomer";
import React from "react";
import "styles/Homepage.scss";
import categoryImage1 from "assets/gummy-coffee 1.svg";
import RoleRestrict from "components/RoleRestrict";
export default function Homepage() {
  return (
    <RoleRestrict onlyFor={["C"]}>
      <div className="homepage">
        <div className="page-1">
          <h2 className="page-title">Our featured products</h2>
          <div className="products-list">
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
          </div>
          <button className="btn mx-auto my-4 px-4 show-more-btn">
            Show more
          </button>
        </div>

        <div className="page-2">
          <h2 className="page-title">Exciting offers</h2>
          <div className="products-list">
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
            <ProductCustomer />
          </div>
        </div>

        <div className="page-3">
          <h2 className="page-title">Browse by category</h2>
          <div className="categories">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
        </div>
      </div>
    </RoleRestrict>
  );
}

const CategoryItem = () => {
  return (
    <div className="category-item">
      <div className="img-cont">
        <img src={categoryImage1} alt="" />
      </div>
      <h5 className="category-name text-center p-4">Food & drinks</h5>
    </div>
  );
};