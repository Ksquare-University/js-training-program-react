import React from "react";
const Counter = (props) =>{

    return(
        <>
            <p className="counter">{props.children}</p>
        </>
    )
}

export default Counter