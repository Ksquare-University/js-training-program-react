import React from "react";
import "./Timer.css";

export function Timer() {
  return (
    <main className="main">
      <div className="card">
        <h1>I'm a Timer!!</h1>
        <div className="card__timer">
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </main>
  );
}
