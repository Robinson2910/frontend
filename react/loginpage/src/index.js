import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="root">
    <Provider store={store}>
      <App></App>
    </Provider>
  </div>
);
