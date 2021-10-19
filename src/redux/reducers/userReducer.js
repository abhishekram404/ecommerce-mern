import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  ROLE,
} from "redux/constants";

const userReducer = (
  state = { isUserLoggedIn: false, r: "C", details: null },
  action
) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        details: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case LOGOUT:
      return {
        isUserLoggedIn: false,
        r: "C",
        details: null,
      };
    case ROLE:
      return {
        ...state,
        r: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
