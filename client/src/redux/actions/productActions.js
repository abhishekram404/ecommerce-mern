import axios from "axios";
import {
  CATEGORIES_FETCH_FAIL,
  CATEGORIES_FETCH_SUCCESS,
  ERROR,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  SUCCESS,
} from "redux/constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/product");
      if (data.success) {
        return dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: data.details,
          isFetched: data.success,
        });
      }
      dispatch({
        type: ERROR,
        payload: data.message,
      });
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        isFetched: data.success,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        isFetched: error?.response?.data.success,
      });
      dispatch({
        type: ERROR,
        payload: "Something went wrong while fetching the products.",
      });
    }
  };
};

export const sendProductAddRequest = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/product/create", product, {
        withCredentials: true,
      });
      if (data.success) {
        dispatch({
          type: SUCCESS,
          payload: data.message,
        });
        return dispatch({
          type: PRODUCT_CREATE_SUCCESS,
          // payload: data.detais,
        });
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
      });
      dispatch({
        type: ERROR,
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: "Something went wrong while creating new product.",
      });
      dispatch({
        type: PRODUCT_CREATE_FAIL,
      });
    }
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/product/categories");

      if (data.success) {
        return dispatch({
          type: CATEGORIES_FETCH_SUCCESS,
          payload: data.details,
        });
      }

      dispatch({
        type: CATEGORIES_FETCH_FAIL,
        payload: data.details,
      });
    } catch (error) {
      dispatch({
        type: CATEGORIES_FETCH_FAIL,
        payload: error?.response?.data?.details,
      });
    }
  };
};
