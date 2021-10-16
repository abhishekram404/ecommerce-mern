import { REGISTER_FAIL, REGISTER_SUCCESS } from "redux/constants";

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
    default:
      return state;
  }
};

export default userReducer;
