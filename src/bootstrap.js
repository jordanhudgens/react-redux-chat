import React from "react";
import ReactDOM from "react-dom";

import store from "./store";

import { BrowserRouter } from "react-router-dom";
import App from "./components/app";

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

const render = () => {
  return ReactDOM.render(<App />, document.querySelector(".app-wrapper"));
};

render();
store.subscribe(render);

document.addEventListener("DOMContentLoaded", main);
