import React from "react";
import "./styles.css";

//player 1 is X, player 2 is O
//player 1 always goes first

let nextSquareID = 1;

class PlayerManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player: 1
        }
    }

    render(){
        return (
            <div>
                Current player: <div id="cp">{this.state.player}</div>
                Note: player 1:X, player 2: O
            </div>
        )
    }
}

function getCurrentPlayer(){
    return Number(document.getElementById('cp').innerHTML);
}

function getSymbol(box){
    console.log("retrieving " + box);
    console.log("found: " + document.getElementById(box).innerHTML);
    return document.getElementById(box).innerHTML;
}

function getID(){
    const x = nextSquareID;
    nextSquareID++;
    return x;
}

function symToPl(symbol){
    if (symbol == 'X') return 'P1';
    else if (symbol == 'O') return 'P2';
}

function plToSym(player){
    if (player == 1) return "X";
    else return "O";
}

function detectWin(){
    console.log("bingo");
    for(let a=1;a<4;a+=3) if ((getSymbol(a) != " ") && (getSymbol(a) == getSymbol(a+1) && getSymbol(a+1) == getSymbol(a+2))) return getSymbol(a);
    for(let b=1;b<4;b++) if ((getSymbol(b) != " ") && (getSymbol(b) == getSymbol(b+3) && getSymbol(b+3) == getSymbol(b+6))) return getSymbol(b);
    if ((getSymbol(1) != " ") && (getSymbol(1) == getSymbol(5) && getSymbol(5) == getSymbol(9))) return getSymbol(1);
    if ((getSymbol(3) != " ") && (getSymbol(3) == getSymbol(5) && getSymbol(5) == getSymbol(7))) return getSymbol(3);
    return false;
}

function nextTurn(){
    let winner = detectWin();
    if (winner) alert(winner + " has won!");
    let cp = Number(document.getElementById('cp').innerHTML);
    if (cp == 1) document.getElementById('cp').innerHTML = 2;
    else document.getElementById('cp').innerHTML = 1;
}

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            symbol: " ",
            id: getID()
        }
    }

    symbol(){
        return this.state.symbol;
    }

    render(){
        return (
            <td id = {this.state.id/2} onClick={() => {
                if(this.state.symbol == " "){
                    if (getCurrentPlayer() == 1) this.setState({symbol: "X"});
                    else this.setState({symbol: "O"});
                    nextTurn();
                }
            }}>{this.state.symbol != " " && this.state.symbol}</td>
        )
    }
} 

let allSquares = [];
for (let j = 1; j < 10; j++){
    allSquares.push(<Square/>);
}

let table = <table>
                <tbody>
                    <tr>
                        {allSquares[0]}
                        {allSquares[1]}
                        {allSquares[2]}
                    </tr>

                    <tr>
                        {allSquares[3]}
                        {allSquares[4]}
                        {allSquares[5]}
                    </tr>

                    <tr>
                        {allSquares[6]}
                        {allSquares[7]}
                        {allSquares[8]}
                    </tr>
                </tbody>
</table>


export default function MainBoard(){
    return (
        <div>
            <div>{table}</div>
            <PlayerManager/>
        </div>
    )
}