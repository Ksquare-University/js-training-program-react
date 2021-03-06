import React from "react";
import { Link } from "react-router-dom";

export function Root() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>Pages</h1>
      <div style={{ marginBottom: "16px" }}>
        <Link to="/events">Events</Link>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <Link to="/lifeCycle">Life Cycle</Link>
      </div>

      <div>
        <Link to="/counter">Counter</Link>
      </div>

      <div>
        <Link to="/hooks">Timer Hooks</Link>
      </div>
    </div>
  );
}
