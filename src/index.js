import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./components/App";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
