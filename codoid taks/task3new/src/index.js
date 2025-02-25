import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import EmailTemplate from "./components/EmailTemplate";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
     */}
    <EmailTemplate />
  </React.StrictMode>
);
