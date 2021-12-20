import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import commonReducer from "./commonReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  common: commonReducer,
  user: userReducer,
  alert: alertReducer,
});

export default reducer;
