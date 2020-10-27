import React, { useState, useReducer } from "react";
import "./Counter.css";
import StepInput from "./Components/StepInput"
import Button from "./Components/Button"
import Counter from "./Components/Counter"



function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

export function CounterView() {
  //SUCESS MESSAGE FUNCTION. USED TO BE OUTSIDE BUT NOW I PLACE IT INSIDE
  let [SuccessDisplayState, SetSuccessDisplayState] = useState("none")

  function SuccessMessage() {
    
    return <p className="success-message" style={{display: SuccessDisplayState}}>
      
      {`Congrats!! You reach the step: ${CounterValue}` }</p>;
  }

  let [StepValue, setStepValue] = useState(1)

  function changeStepValue(newStepValue){
    if(isNumeric(newStepValue)){
      setStepValue(newStepValue)
    }
    
    
  }

  let [GoalValue, setGoalValue] = useState(10)

  function changeGoalValue(newGoalValue){
    if(isNumeric(newGoalValue)){
      setGoalValue(newGoalValue)
    }
  }

  let [CounterValue, setCounterValue] = useState(1)

  //Setting button enabled/disabled values so I can toggle them when events happen.
  const [SetButtonStatus, toggleSetButton] = useReducer(checked => !checked, false);

  const [ResetButtonStatus, toggleResetButton] = useReducer(checked => !checked, true);

  const [StepButtonStatus, toggleStepButton] = useReducer(checked => !checked, true);

  const [inputStatus, toggleInput] = useReducer(checked => !checked, false);

  //Functions that handle what happens when you press a button
  function SetClickFunction(){
    toggleSetButton();
    toggleResetButton();
    toggleStepButton();
    toggleInput();
    SetSuccessDisplayState("none");
  }

  function ResetClickFunction(){
    toggleSetButton();
    toggleResetButton();
    toggleStepButton();
    toggleInput();
    SetSuccessDisplayState("none");

    setCounterValue(1);
    setStepValue(1);
    setGoalValue(10);
  }
  
  function SubtractClickFunction(){
    if(parseFloat(CounterValue) - parseFloat(StepValue) < 0){
      setCounterValue(0);
    } else{
      setCounterValue(parseFloat(CounterValue) - parseFloat(StepValue));
    }
  }

  function AddClickfunction(){
    /*
    return new Promise(() => 
      setCounterValue(parseFloat(CounterValue) + parseFloat(StepValue))).then(console.log(CounterValue));
      */
     //That code works exactly the same as just doing this:
     setCounterValue(parseFloat(CounterValue) + parseFloat(StepValue))

     //console.log(CounterValue);
    //This returns the current Counter value, like await, how do I use async in react?

    //In the meantime I will just hack it.
    if(parseFloat(CounterValue) + parseFloat(StepValue) >= parseFloat(GoalValue)){
      SetSuccessDisplayState("")
      toggleStepButton();
    }
    
  }

  return (
    <main className="main">
      <div className="counter-card">
        <h1 className="counter-card__title">JS NG 2020 Counter</h1>
        <form className="counter-form">
          <div style={{ display: "flex", marginBottom: "32px", width: "100%" }}>
            <div className="counter-form__container">
              <div className="field_first">
                <label htmlFor="step">STEP</label>
                <StepInput changeFunction = {changeStepValue}
                disabled = {inputStatus}
                placeholderValue = {StepValue}/>
              </div>
              <div>
                <label htmlFor="step">GOAL</label>
                <StepInput changeFunction = {changeGoalValue}
                disabled = {inputStatus}
                placeholderValue = {GoalValue}/>
              </div>
            </div>
            <div className="counter-form__container">
              {/* NEED TO SET UP THE TOGGLE PROPERLY */}
              <div className="container-button container-button_first">
                <Button disabled = {SetButtonStatus} className = {"counter-form__button"} ClickFunction ={SetClickFunction} >SET</Button>
              </div>
              <div className="container-button">
                <Button disabled = {ResetButtonStatus} className = {"counter-form__button"}
                ClickFunction ={ResetClickFunction}>
                  RESET</Button>
              </div>
            </div>
          </div>
          <div className="container-counter">
            <Counter>{CounterValue}</Counter>
          </div>
          <div>
            {/*SuccessMessage here???*/}
            {SuccessMessage(CounterValue)}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button disabled = {StepButtonStatus}className="counter-form__button counter-form__button_step"
            ClickFunction = {SubtractClickFunction}>
              -
            </Button>
            <Button disabled = {StepButtonStatus} className="counter-form__button counter-form__button_step" 
            ClickFunction = {AddClickfunction}>
              +
            </Button>
          </div>
        </form>
        {/* This is the place for <SuccessMessage /> component */}
      </div>
    </main>
  );
}
