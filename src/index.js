import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

import "./index.css";
import store from "./store";
import ContextProvider from "./context";

ReactDOM.render(
  <ContextProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ContextProvider>,
  document.getElementById("root")
);
