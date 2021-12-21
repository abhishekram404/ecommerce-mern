import axios from "axios";
import {
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
} from "redux/constants";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/product");
      if (data.success) {
        return dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: data.details,
        });
        dispatch({
          type: GET_ALL_PRODUCTS_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
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
      console.log(data);
      if (data.success) {
        return dispatch({
          type: PRODUCT_CREATE_SUCCESS,
          // payload: data.detais,
        });
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: PRODUCT_CREATE_FAIL,
      });
    }
  };
};
