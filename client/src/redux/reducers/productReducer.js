import {
  CATEGORIES_FETCH_FAIL,
  CATEGORIES_FETCH_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
} from "redux/constants";

export const productReducer = (
  state = { products: [], isFetched: null, categories: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetched: action.isFetched,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        isFetched: action.isFetched,
      };
    case PRODUCT_CREATE_SUCCESS:
      return state;
    case PRODUCT_CREATE_FAIL:
      return state;

    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORIES_FETCH_FAIL:
      return state;
    default:
      return state;
  }
};

export default productReducer;
