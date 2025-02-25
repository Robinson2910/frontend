import React from "react";
import ReactDOM from "react-dom/client";

import "./css/pages.css";

import Mission from "./pages/Mission";
import reportWebVitals from "./reportWebVitals";
import KnowingGod from "./pages/KnowingGod";
import StoryFrench from "./pages/StoryFrench";
import MissionFrench from "./pages/MissionFrench";
import Story from "./pages/Story";
import KnowingGodFrench from "./pages/KnowingGodFrench";
import KnowingGodSpanish from "./pages/KnowingGodSpanish";
import StorySpanish from "./pages/StorySpanish";
import MissionSpanish from "./pages/MissionSpanish";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Mission /> */}
    {/* <Story /> */}
    {/* <KnowingGod /> */}
    {/* <MissionFrench /> */}
    {/* <StoryFrench /> */}
    {/* <KnowingGodFrench /> */}
    <StorySpanish />
    <MissionSpanish />
    <KnowingGodSpanish />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
