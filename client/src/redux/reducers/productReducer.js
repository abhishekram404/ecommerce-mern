import {
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
} from "redux/constants";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return state;
    default:
      return state;
  }
};

export default productReducer;
