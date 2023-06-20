import React from "react";
import "./task_manager.css"

let i = 0;

function AddTask({onClick, visibility}){
    return (
        <div>
            {visibility && <button onClick = {onClick}>Add Task</button>}
        </div>
    )
}




function AddTaskInfo({visibility, onSubmit, onBack}){

    function handleClick(){
        const x = [];
        x[0] = document.getElementById('name').value;
        x[1] = document.getElementById('info').value;
        x[2] = document.getElementById('priority').value;
        x[3] = document.getElementById('due').value;
        document.getElementById('name').innerHTML = "";
        document.getElementById('info').innerHTML = "";
        document.getElementById('priority').innerHTML = "";
        document.getElementById('due').innerHTML = "";
        onSubmit(x[0], x[1], x[2], x[3]);
    }

    return (
        <div>
            <div style={{display: visibility ? "flex" : "none", flexDirection: "column"}} className = "inputs">
                <button className="back" onClick = {onBack}>Back</button>
                <div>
                    <label htmlFor="name">*Name: </label>
                    <input type="text" id = "name"/>
                </div>

                <div>
                    <label htmlFor="info">Details: </label>
                    <input type="text" id = "info"/>
                </div>
                
                <div>
                    <label htmlFor="priority">Priority: </label>
                    <select id = "priority">
                        <option selected>Select a priority</option>
                        <option>High</option>
                        <option>Normal</option>
                        <option>Low</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="due">Due date: </label>
                    <input type="date" id = "due"/>
                </div>
                <button onClick = {() => {handleClick()}}>Submit</button>
            </div>
        </div>
    )
}

function Task({name, priority, due, info}){
    let color = "white";
    if (priority == "Select a priority") priority = false;
    else switch (priority){
        case "High": 
            color = "rgb(229 96 97)";
            break;
        case "Normal":
            color = "yellow";
            break;
        case "Low": 
            color = "rgb(138 221 138)";
            break;
        default:
            color = "white";
            break;
    }
    if (info == "") info = false;
    if (due == "") due = false;
    else {
        let dateArr = due.split("-");
        due = dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
    }
    return (
        <div className = "card">
            <div className = "cardHeader">{name}</div>
            {info && <div>Notes: {info}</div>}
            <div className = "label" style={{backgroundColor: color}}>{priority && priority}</div>
            {due && <div>Due date: {due}</div>}
        </div>
    )
}

class Manager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addMenuVisible: false,
            tasks: []
        }
    }

    arrayAppend(arr, ele){
        let a = arr;
        a.push(ele);
        return a
    }

    addTask(name, info, priority, due){
        let x = this.arrayAppend(this.state.tasks, <Task name = {name} 
                                                         info = {info}
                                                         priority = {priority}
                                                         due = {due}
                                                         key = {i}/>);
        this.setState({addMenuVisible: false,
                       tasks: x});
        i++;
    }

    openAddMenu(){
        if (!this.state.addMenuVisible){
            this.setState({addMenuVisible: true});
        }
    }

    hideAddMenu(){
        this.setState({addMenuVisible: false});
    }

    render(){
        return (
            <div>
                <AddTask visibility = {!this.state.addMenuVisible} onClick = {() => {this.openAddMenu()}}/>
                <AddTaskInfo visibility = {this.state.addMenuVisible} onSubmit = {(a,b,c,d) => {this.addTask(a,b,c,d)}} onBack = {() => {this.hideAddMenu()}}/>
                <div>{this.state.tasks}</div>
            </div>
        )
    }
}

export default function App(){
    return (
        <div className="container">
            <header>Task Manager</header>
            <Manager/>
        </div>
    )
}