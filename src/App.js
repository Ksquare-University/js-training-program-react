import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Timer, Form } from "./views";

export function App() {
  return (
    <Router>
      <Switch>
        <Route component={Timer} path="/lifeCycle" />
        <Route component={Form} path="/events" />
      </Switch>
    </Router>
  );
}
