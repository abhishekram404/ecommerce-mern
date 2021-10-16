import { REGISTER_FAIL, REGISTER_SUCCESS } from "redux/constants";

const userReducer = (
  state = { isUserLoggedIn: false, role: "customer" },
  action
) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        details: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isUserLoggedIn: false,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
