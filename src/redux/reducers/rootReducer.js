import { combineReducers } from "redux";
import commonReducer from "./commonReducer";

const reducer = combineReducers({
  common: commonReducer,
});

export default reducer;
