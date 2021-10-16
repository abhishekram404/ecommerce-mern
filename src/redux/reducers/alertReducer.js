const { SUCCESS, ERROR, CLEAR } = require("redux/constants");

export const alertReducer = (state = { type: null, message: "" }, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        type: "SUCCESS",
        message: action.payload,
      };
    case ERROR:
      return {
        ...state,
        type: "ERROR",
        message: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        type: null,
        message: "",
      };
    default:
      return state;
  }
};

export default alertReducer;
