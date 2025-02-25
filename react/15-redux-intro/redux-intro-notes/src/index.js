import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import store from "./store";
store.dispatch({ type: "account/deposit", payload: 250 });
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 

so now our application knows about the Redux store

which means that every single component

in the application can now read data from the store

and can dispatch actions to it.*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
