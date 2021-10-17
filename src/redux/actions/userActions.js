import axios from "axios";
import {
  ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  ROLE,
  SUCCESS,
} from "redux/constants";
import Cookies from "js-cookie";
// import history from "../../history";

export const register_user = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/register", formData);
      if (data.success) {
        dispatch({ type: SUCCESS, payload: data.message });
        dispatch({ type: REGISTER_SUCCESS, payload: data });
        // history.push("/login");
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
        dispatch(check_role());
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

export const logout_user = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/logout");

      if (data.success) {
        dispatch({ type: SUCCESS, payload: data.message });
        dispatch({ type: LOGOUT });
        // history.push("/login");
        return;
      }
      dispatch({ type: SUCCESS, payload: data.message });
      dispatch({ type: LOGOUT });
      // history.push("/login");
    } catch (error) {
      dispatch({ type: SUCCESS, payload: error?.response?.data.message });
      dispatch({ type: LOGOUT });
      // history.push("/login");
    }
  };
};

export const check_login = () => {
  return async (dispatch) => {
    try {
      const isUserLoggedIn = await Cookies.get("isUserLoggedIn");
      if (isUserLoggedIn) {
        dispatch({ type: SUCCESS, payload: "Login successful" });
        dispatch({ type: LOGIN_SUCCESS, payload: null });
        dispatch(check_role());
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

export const check_role = () => {
  return async (dispatch) => {
    try {
      const r = await Cookies.get("r");

      dispatch({ type: ROLE, payload: r });
      return;
    } catch (error) {
      dispatch({ type: ROLE, payload: "C" });
    }
  };
};
