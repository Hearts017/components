import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Buttons from "./components/buttons";
import Cards from "./components/cards";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Buttons />
    <Cards />
  </React.StrictMode>
);
