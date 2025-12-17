import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet } from "react-router-dom";
import Store from "./Redux/Store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
        <Outlet />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
