import React from "react";



const StepInput = (props) =>{

    function handleChange(e){
        props.changeFunction(e.target.value);
    }

    return(
        <>
            <input className="counter-form__input"
            onChange = {handleChange}
            disabled = {props.disabled}
            placeholder = {props.placeholderValue}
            />
        </>
    )
}

export default StepInput