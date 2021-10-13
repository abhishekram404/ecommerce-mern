import { CART_COLLAPSE, CART_EXPAND, TOGGLE_CART } from "redux/constants";

export const expand_cart = () => {
  return {
    type: CART_EXPAND,
  };
};

export const collapse_cart = () => {
  return {
    type: CART_COLLAPSE,
  };
};

export const toggle_cart = () => {
  return {
    type: TOGGLE_CART,
  };
};
