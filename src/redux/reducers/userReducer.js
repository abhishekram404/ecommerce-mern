import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "redux/constants";

const userReducer = (
  state = { isUserLoggedIn: false, role: "customer" },
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
    default:
      return state;
  }
};

export default userReducer;
