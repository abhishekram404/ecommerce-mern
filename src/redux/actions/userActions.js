import axios from "axios";
import {
  ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SUCCESS,
} from "redux/constants";

export const register_user = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/register", formData);
      if (data.success) {
        dispatch({ type: SUCCESS, payload: data.message });
        dispatch({ type: REGISTER_SUCCESS, payload: data });
        return;
      }

      dispatch({ type: ERROR, payload: data.message });
      dispatch({ type: REGISTER_FAIL, payload: data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err?.response?.data?.message });
      dispatch({ type: REGISTER_FAIL, payload: err?.response?.data });
    }
  };
};
