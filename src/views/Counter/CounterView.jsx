import React from "react";
import "./Counter.css";
import {Component} from "react"; 

export function SuccessMessage({ goalStep }) {
  return <p className="success-message">{`Congrats!! You reach the step: ${goalStep}`}</p>;
}

export class CounterView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter : 0,
      isLocked: false,
      fixedStep: null,
      fixedGoal: null,
      step : null,
      goal : null
    }
  }

  handleStepChange = (event) => {
    this.setState({
      step: event.target.value
    })
  }
  handleGoalChange = (event) => {
    this.setState({
      goal: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  handleSetButton = () => {
    this.setState({
      isLocked: true,
      fixedStep: this.state.step,
      fixedGoal: this.state.goal,
      step: null,
      goal: null
    })
  } 
  handlePlusButton = () => {
    this.setState({
      counter: Number(this.state.counter) + Number(this.state.fixedStep)
    })
  }
  handleMinusButton = () => {
    this.setState({
      counter: Number(this.state.counter) - Number(this.state.fixedStep)
    })
  }
  handleReset = () => {
    this.setState({
      counter : 0,
      isLocked: false,
      step: this.state.fixedStep,
      fixedStep: null,
      fixedGoal: null,
      goal : 10
    })
  }
   
  render() {
  return (
    <main className="main">
      <div className="counter-card">
        <h1 className="counter-card__title">JS NG 2020 Counter</h1>
        <form className="counter-form" onSubmit={this.handleSubmit}>
          <div style={{ display: "flex", marginBottom: "32px", width: "100%" }}>
            <div className="counter-form__container">
              <div className="field_first">
                <label htmlFor="step">STEP</label>
                <input className="counter-form__input" 
                disabled = {this.state.isLocked}
                value = {this.state.step}
                onChange ={this.handleStepChange}
                name="step" />
              </div>
              <div>
                <label htmlFor="step">GOAL</label>
                <input className="counter-form__input"
                disabled = {this.state.isLocked}
                value = {this.state.goal}
                onChange ={this.handleGoalChange} 
                name="goal" />
              </div>
            </div>
            <div className="counter-form__container">
              <div className="container-button container-button_first">
                <button 
                className="counter-form__button"
                disabled = {(this.state.step && this.state.goal)  === null}
                onClick = {this.handleSetButton}
                >SET</button>
              </div>
              <div className="container-button">
                <button
                disabled = {(this.state.fixedStep && this.state.fixedGoal)  === null}
                onClick={this.handleReset}
                className="counter-form__button">
                  RESET
                </button>
              </div>
            </div>
          </div>
          <div className="container-counter">
            <label 
              className="counter"
              >{this.state.counter}</label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button 
              disabled= {this.state.counter <= 0 || this.state.counter >= this.state.fixedGoal}
              onClick = {this.handleMinusButton} 
              className="counter-form__button counter-form__button_step">
              -
            </button>
            <button 
              disabled= {this.state.counter >= this.state.fixedGoal}
              onClick = {this.handlePlusButton}
              className="counter-form__button counter-form__button_step">
              +
            </button>
          </div>
        </form>
        { this.state.counter >= this.state.fixedGoal && this.state.counter + this.state.fixedGoal != 0 &&
         (<SuccessMessage/>)
         }
      </div>
    </main>
  );
}
}
