import { CART_EXPAND, CART_COLLAPSE, TOGGLE_CART } from "redux/constants";
export const commonReducer = (state = { cartExpanded: false }, action) => {
  switch (action.type) {
    case CART_EXPAND:
      return {
        ...state,
        cartExpanded: true,
      };
    case CART_COLLAPSE:
      return {
        ...state,
        cartExpanded: false,
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartExpanded: !state.cartExpanded,
      };
    default:
      return state;
  }
};

export default commonReducer;
