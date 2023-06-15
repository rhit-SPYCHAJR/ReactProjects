import React from "react";

class Greeter extends React.Component{
    render(){
        return (
            <div>Hello {this.props.userName}</div>
        )
    }
}

function GreeterF(props){
    return <div>Hello {props.userName}</div>
}

export default function Greet(){
    return (
        <div>
            <GreeterF userName = "David"/>
        </div>
    )
}