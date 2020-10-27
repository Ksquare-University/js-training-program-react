import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Timer, Form, Root, Counter } from "./views";

export function App() {
  return (
    <Router>
      <Switch>
        <Route component={Timer} path="/lifeCycle" />
        <Route component={Form} path="/events" />
        <Route component={Counter} path="/counter" />
        <Route component={Root} path="/" />
      </Switch>
    </Router>
  );
}
