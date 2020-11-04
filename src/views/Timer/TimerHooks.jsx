import React, { useState, useEffect } from "react";
import "./Timer.css";

/**
 *
 * 1. useState
 * 2. useEffect
 * 3. useRef
 * 4. useContext
 * 5. useReducer
 */

const fetch = (url) => new Promise((resolve) => setTimeout(() => resolve(url), 0));

function TimerTiny({ time }) {
  const [date, updateDate] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    updateDate(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), time);

    const asyncFunction = async () => {
      try {
        const url = await fetch("https://js.training.ksquare.com");
        console.log(url);
      } catch (e) {
        // Error!!!
      }
    };

    asyncFunction();

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="card">
      <h1>I'm a Timer!!</h1>
      <div className="card__timer">
        <p>{date}</p>
      </div>
    </div>
  );
}

export function TimerHooks() {
  return (
    <main className="main">
      <div style={{ marginRight: "8px" }}>
        <TimerTiny time={5000} />
      </div>
      <div>
        <TimerTiny />
      </div>
    </main>
  );
}
