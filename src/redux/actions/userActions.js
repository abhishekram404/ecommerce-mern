import axios from "axios";
import {
  ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SUCCESS,
} from "redux/constants";
import Cookies from "js-cookie";

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

export const login_user = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/login", formData);

      if (data.success) {
        dispatch({ type: SUCCESS, payload: data.message });
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        return;
      }
      dispatch({ type: ERROR, payload: data.message });
      dispatch({ type: LOGIN_FAIL, payload: data });
      return;
    } catch (err) {
      dispatch({ type: ERROR, payload: err?.response?.data.message });
      dispatch({ type: LOGIN_FAIL, payload: err?.response?.data.message });
      return;
    }
  };
};

export const check_login = () => {
  return async (dispatch) => {
    try {
      const isCookieAvailable = await Cookies.get("isUserLoggedIn");
      if (isCookieAvailable) {
        dispatch({ type: SUCCESS, payload: "Login successful" });
        dispatch({ type: LOGIN_SUCCESS, payload: null });
        return;
      }

      dispatch({ type: ERROR, payload: "Login failed" });
      dispatch({ type: LOGIN_FAIL, payload: null });
      return;
    } catch (error) {
      dispatch({ type: ERROR, payload: "Login failed" });
      dispatch({ type: LOGIN_FAIL, payload: null });
    }
  };
};
