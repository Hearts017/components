import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Buttons from "./components/buttons";
import Cards from "./components/cards";
import Ads from "./components/ads";
import ArrowButton from "./components/arrowButton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Ads />
    <Buttons />
    <Cards />
    <ArrowButton />
  </React.StrictMode>
);
