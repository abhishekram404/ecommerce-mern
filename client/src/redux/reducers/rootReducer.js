import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import commonReducer from "./commonReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  common: commonReducer,
  user: userReducer,
  alert: alertReducer,
  product: productReducer,
});

export default reducer;
