import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Appv1 from "./Appv1";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={15} color="red" size={24} /> */}
    <Appv1 />
  </React.StrictMode>
);
