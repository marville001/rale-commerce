import { createStore, applyMiddleware } from "redux";
// import {  } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { productReducers } from "./_reducers";

const midleware = [thunk];

const store = createStore(
  productReducers,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
