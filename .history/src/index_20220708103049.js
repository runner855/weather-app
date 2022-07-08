import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import forecast from "./data/forecast.json";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
