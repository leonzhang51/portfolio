import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { createStore } from "redux";

const initialState = {
  mainContent: "Home",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Home":
      return {
        ...state,
        mainContent: action.payload,
      };
    case "About":
      return {
        ...state,
        mainContent: action.payload,
      };
    case "MyCV":
      return {
        ...state,
        mainContent: action.payload,
      };
    case "MyWorks":
      return {
        ...state,
        mainContent: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
