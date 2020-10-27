import React from "react";



const Button = (props) =>{

    function handleClick(e){
        //preventDefault allows us to not refresh the site everytime we click the button
        e.preventDefault();
        props.ClickFunction(e.target.value);
    }


    return(
        <>
            <button className={props.className}
                disabled = {props.disabled}
                onClick = {handleClick}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button