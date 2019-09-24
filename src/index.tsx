import * as React from "react";
import { render } from "react-dom";
import StoreProvider from "./Store";
import "./styles.css";
import App from "./App";
const rootElement: HTMLElement = document.getElementById("root");
render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
