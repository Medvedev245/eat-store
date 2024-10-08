import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import { GlobalStyle } from "./components/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
