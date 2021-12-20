import axios from "axios";
import {
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
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
