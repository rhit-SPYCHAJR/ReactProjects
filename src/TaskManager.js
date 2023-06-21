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
        let k = document.getElementById('priority').value;
        x[2] = (k != "Select a priority") ? k : "None";
        x[3] = document.getElementById('due').value;
        document.getElementById('name').value = "";
        document.getElementById('info').value = "";
        document.getElementById('priority').value = "Select a priority";
        document.getElementById('due').value = "";
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

function Task({name, priority, due, info, id, onDelete}){
    function deleteSelf(){
        onDelete(id);
    }
    let color = "white";
    switch (priority){
        case "High": 
            color = "rgb(229 96 97)";
            break;
        case "Normal":
            color = "yellow";
            break;
        case "Low": 
            color = "rgb(138 221 138)";
            break;
        case "None":
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
            <DeleteTask onClick = {() => {deleteSelf()}}/>
        </div>
    )
}

function DeleteTask({onClick}){
    return (
        <button onClick = {onClick} className = "delete">x</button>
    )
}

class Manager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addMenuVisible: false,
            searchResults: [],
            tasks: []
        }
    }

    arrayAppend(arr, ele){
        let a = arr;
        a.push(ele);
        return a
    }

    addTask(name, info, priority, due){
        let z = i;
        console.log("i: " + i);
        let x = this.arrayAppend(this.state.tasks, <Task name = {name} 
                                                         info = {info}
                                                         priority = {priority}
                                                         due = {due}
                                                         id = {z}
                                                         key = {z}
                                                         onDelete={(q) => this.deleteTask(q)}/>);
        this.setState({addMenuVisible: false,
                       tasks: x});
        i++;
    }

    deleteTask(id){
        let x = this.state.tasks;
        for(let j = 0; j < x.length; j++){
            if (x[j].props.id == id){
                x.splice(j,1);
                break;
            }
        }
        this.setState({tasks: x});
    }

    sortByPriority(){
        let priority = ["High", "Normal", "Low", "None"];
        let tasks = this.state.tasks;
        let sorted = [];
        priority.forEach(p => {
            tasks.forEach(t => {
                if (t.props.priority == p) sorted.push(t);
            });
        });
       this.setState({tasks: sorted});
    }

    search(query){
        let results = [];
        this.state.tasks.forEach(t => {
            if (t.props.name.startsWith(query)) results.push(t);
        });
        this.setState({searchResults: results});
    }

    openAddMenu(){
        if (!this.state.addMenuVisible){
            this.setState({addMenuVisible: true});
        }
    }

    hideAddMenu(){
        this.setState({addMenuVisible: false});
    }

    getFormattedTask(i){
        let x = this.state.tasks[i].props;
        let pr = (x.priority == "Select a priority") ? "" : x.priority;
        return x.name + "§" +  x.info + "§" + pr + "§" + x.due
    }

    saveAll(){
        localStorage.clear();
        for(let j = 0; j < this.state.tasks.length; j++){
            localStorage.setItem("task " + j,  this.getFormattedTask(j));
        }
        alert("Save successful");
    }

    loadFromLocal(){
        let arr = [];
        let j;
        for(j = 0;; j++){
            let x = localStorage.getItem("task " + j);
            let unpacked;
            if (x != null){
                unpacked = x.split("§");
                arr.push(<Task name = {unpacked[0]} 
                               info = {unpacked[1]}
                               priority = {unpacked[2]}
                               due = {unpacked[3]}
                               key = {j}
                               id = {j}
                               onDelete = {(q) => this.deleteTask(q)}/>);
            }
            else break;
        }
        i = j;
        this.setState({tasks: arr});
        if (arr.length == 0) alert("Local storage does not have any tasks");
    }

    clearLocal(){
        localStorage.clear();
        alert("Clear successful");
    }

    render(){
        return (
            <div>
                <AddTask visibility = {!this.state.addMenuVisible} onClick = {() => {this.openAddMenu()}}/>
                <AddTaskInfo visibility = {this.state.addMenuVisible} onSubmit = {(a,b,c,d) => {this.addTask(a,b,c,d)}} onBack = {() => {this.hideAddMenu()}}/>
                <div>{this.state.tasks}</div>
                <div className = "toolbar">
                    <div className = "toolbarHeader">Local storage</div>
                    {this.state.tasks.length > 0 && <button onClick = {() => {this.saveAll()}}>Save</button>}
                    <button onClick = {() => {this.loadFromLocal()}}>Load</button>
                    <button onClick = {() => {this.clearLocal()}}>Clear</button>
                </div>
                <div className = "organize">
                    <div className = "toolbarHeader">Search and sort</div>
                    <button onClick = {() => {this.sortByPriority()}}>Sort by priority</button>
                    <div>
                        <input type="text" id = "search"/>
                        <button onClick = {() => {this.search(document.getElementById("search").value)}}>Search</button>
                        <div>{this.state.searchResults}</div>
                    </div>
                </div>
                
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