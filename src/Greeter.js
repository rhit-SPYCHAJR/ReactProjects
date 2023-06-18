import React from "react";

function Greeter(props){
    return <div>Hello {props.userName}</div>
}

export default function Greet(){
    return (
        <div>
            <Greeter userName = "David"/>
        </div>
    )
}