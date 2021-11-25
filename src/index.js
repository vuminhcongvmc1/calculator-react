import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "minireset.css";
import "./styles/global.scss";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
