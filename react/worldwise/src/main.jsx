import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//configuring eslint(these packages will be stored as dependenecies)
//  npm install  eslint vite-plugin-eslint eslint-config-react-app --save-dev

// step2:

// config our project to integrate with these packages
//configure the behavior of eslint
//.eslintrc.json
// code in eslintrc.json
//   {
//   "extends": "react-app"
// }

// step 3: importing eslint plugin and adding it to plugins

// code: import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });
