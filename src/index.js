import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import $ from "jquery";
import "antd/dist/reset.css";
import "./utils/i18n";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import store, { Persistor } from "./store";
import App from "./App";

window.jQuery = $;
require("bootstrap");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
