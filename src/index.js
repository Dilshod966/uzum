import React from "react";
import ReactDOM from "react-dom/client"; // <-- MUHIM! "react-dom/client" import qilinishi kerak
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // <-- createRoot ishlatiladi

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);