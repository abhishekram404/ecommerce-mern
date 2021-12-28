import React from "react";
import "styles/Cart.scss";
import fallbackImage from "assets/shopy_fallback.svg";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import clsx from "clsx";
import { collapse_cart } from "redux/actions/commonActions";
import { useDispatch } from "react-redux";
export default function Cart() {
  const dispatch = useDispatch();
  const { cartExpanded } = useSelector((state) => state.common);

  return (
    <div
      className={clsx("cart m-4 pb-3 px-3 border", cartExpanded && "expanded")}
    >
      <div className="row border-bottom">
        <div className="col-11 title-row">
          <h2 className="text-center pt-3 pb-2">Your Cart</h2>
        </div>
        <div
          className="col-1 close-btn-row"
          onClick={() => dispatch(collapse_cart())}
        >
          <AiOutlineCloseCircle className="close-btn" />
        </div>
      </div>

      <div className="cart-items">
        <CartItem
          fallbackImage={fallbackImage}
          name="OnePlus Nord"
          rate={25}
          quantity={3}
        />

        <button className="btn btn-sm btn-outline-secondary show-all-btn mx-auto mt-2 w-100 py-1">
          Show all cart items
        </button>
        <div className="item p-2 row grand-total">
          <div className="col d-flex align-items-center">
            <h2>Grand Total</h2>
          </div>
          <div className="col-2 product-quantity">
            <span>Quantity</span>
            {/* <input
          type="number"
          className="form-control form-control-sm w-75 mt-1"
        /> */}
            <h6>6</h6>
          </div>
          <div className="col-2 product-pricing">
            <span>Price</span>
            <h6>$255</h6>
          </div>
        </div>
        <button className="btn checkout-btn text-center">Checkout</button>
      </div>
    </div>
  );
}

const CartItem = ({ fallbackImage, name, rate, quantity, price }) => {
  return (
    <div className="item row p-3 border-bottom">
      <div className="col-2 placeholder-img">
        <img src={fallbackImage} alt="" className="cart-placeholder-img" />
      </div>
      <div className="col product-detail">
        <div className="product-name">OnePlus Nord</div>
        <div className="rate">$25 per item</div>
      </div>
      <div className="col-2 product-quantity">
        <span>Quantity</span>
        {/* <input
          type="number"
          className="form-control form-control-sm w-75 mt-1"
        /> */}
        <h6>{quantity}</h6>
      </div>
      <div className="col-2 product-pricing">
        <span>Price</span>
        <h6>${rate * quantity}</h6>
      </div>
    </div>
  );
};
