import Axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

Axios.defaults.baseURL="http://localhost/react-projects/email/"


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
