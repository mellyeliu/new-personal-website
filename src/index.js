import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import { register } from "./registerServiceWorker";
import "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
//register();
