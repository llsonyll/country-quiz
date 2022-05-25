// import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer,
  // composeEnhancers(applyMiddleware(thunk))
});
