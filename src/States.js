import React from "react";

class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "red"
        };
    }

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    render(){
        return (
            <div style = {{color: this.state.color,
                           fontSize: "30px"}}>Hello</div>
        )
    }
}

function NewState(){
    const s = <State/>
    s.changeColor("blue");
    return (
        <div>
            {s}
        </div>
    )
}


export default function States(){
    return (
        <div>
            <NewState/> 
        </div>
    )
}