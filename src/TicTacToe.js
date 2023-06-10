import React from "react";
import "./styles.css";

//player 1 is X, player 2 is O
//player 1 always goes first

let i = 1;
let player = 1;

function symToPl(symbol){
    if (symbol == 'X') return 'P1';
    else if (symbol == 'O') return 'P2';
}

function plToSym(player){
    if (player == 1) return "X";
    else return "O";
}

function detectWin(){
    for(let k=1;k<4;k+=3) if ((allSquares[k].symbol != " ") && (allSquares[k].symbol == allSquares[k+1].symbol && allSquares[k+1].symbol == allSquares[k+2].symbol)) return allSquares[k].symbol;
    for(let k=1;k<4;k++) if ((allSquares[k].symbol != " ") && (allSquares[k].symbol == allSquares[k+3].symbol && allSquares[k+3].symbol == allSquares[k+6].symbol)) return allSquares[k].symbol;
    if ((allSquares[1].symbol != " ") && (allSquares[1].symbol == allSquares[5].symbol && allSquares[5].symbol == allSquares[9].symbol)) return allSquares[1].symbol;
    if ((allSquares[3].symbol != " ") && (allSquares[3].symbol == allSquares[5].symbol && allSquares[5].symbol == allSquares[7].symbol)) return allSquares[3].symbol;
    return false;
}

function nextTurn(){
    let winner = detectWin();
    if (winner) alert(winner + " has won!");
    if (player == 1) player = 2;
    else player = 1;
}

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            symbol: "( )",
            id: i
        }
        i++;
    }

    P1(){
        this.symbol = "X";
    }

    P2(){
        this.symbol = "O";
    }

    render(){
        return (
            <td onClick={() => {
                if (player == 1) this.setState({symbol: "X"})
                else this.setState({symbol: "O"})
                nextTurn();
            }}>{this.state.symbol}</td>
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
            <div id="footer">It is {plToSym(player)}'s turn</div>
        </div>
    )
}