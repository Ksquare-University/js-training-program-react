import React from "react";
import "./Counter.css";

export function SuccessMessage({ goalStep }) {
  return <p className="success-message">{`Congrats!! You reach the step: ${goalStep}`}</p>;
}

export function CounterView() {
  return (
    <main className="main">
      <div className="counter-card">
        <h1 className="counter-card__title">JS NG 2020 Counter</h1>
        <form className="counter-form">
          <div style={{ display: "flex", marginBottom: "32px", width: "100%" }}>
            <div className="counter-form__container">
              <div className="field_first">
                <label htmlFor="step">STEP</label>
                <input className="counter-form__input" name="step" />
              </div>
              <div>
                <label htmlFor="step">GOAL</label>
                <input className="counter-form__input" name="goal" />
              </div>
            </div>
            <div className="counter-form__container">
              <div className="container-button container-button_first">
                <button className="counter-form__button">SET</button>
              </div>
              <div className="container-button">
                <button disabled className="counter-form__button">
                  RESET
                </button>
              </div>
            </div>
          </div>
          <div className="container-counter">
            <p className="counter">1</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button disabled className="counter-form__button counter-form__button_step">
              -
            </button>
            <button disabled className="counter-form__button counter-form__button_step">
              +
            </button>
          </div>
        </form>
        {/* This is the place for <SuccessMessage /> component */}
      </div>
    </main>
  );
}
