import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./components/Redux/Store/Store";

import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
