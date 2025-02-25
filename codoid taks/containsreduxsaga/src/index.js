// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import DragDrop from "./components/DragDrop";
// import reportWebVitals from "./reportWebVitals";
// import LoginPage from "./components/LoginPage";
// import LoginForm from "./components/LoginForm";
// import "./CSS/LoginPage.css";
// import SignUp from "./components/SignUp";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <DragDrop /> */}
//     {/* <LoginPage /> */}
//     <SignUp />
//     {/* {<LoginForm />} */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginPage from "./components/LoginPage";
import reportWebVitals from "./reportWebVitals";
// import { store } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";

import { persistor, store } from "./Redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <App /> */}
        <LoginPage />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
