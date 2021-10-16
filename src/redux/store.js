import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
