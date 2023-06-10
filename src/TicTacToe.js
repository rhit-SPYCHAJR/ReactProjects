import {React, ReactDOM} from "react";

//player 1 is X, player 2 is O
//player 1 always goes first

function symToPl(symbol){
    if (symbol == 'X') return 'P1';
    else if (symbol == 'O') return 'P2';
}

function detectWin(){
    for(let k=1;k<4;k+=3) if ((allSquares[k].symbol != " ") && (allSquares[k].symbol == allSquares[k+1].symbol && allSquares[k+1].symbol == allSquares[k+2].symbol)) return allSquares[k].symbol;
    for(let k=1;k<4;k++) if ((allSquares[k].symbol != " ") && (allSquares[k].symbol == allSquares[k+3].symbol && allSquares[k+3].symbol == allSquares[k+6].symbol)) return allSquares[k].symbol;
    if ((allSquares[1].symbol != " ") && (allSquares[1].symbol == allSquares[5].symbol && allSquares[5].symbol == allSquares[9].symbol)) return allSquares[1].symbol;
    if ((allSquares[3].symbol != " ") && (allSquares[3].symbol == allSquares[5].symbol && allSquares[5].symbol == allSquares[7].symbol)) return allSquares[3].symbol;
    return false;
}

function handleClick(){

}

let i = 1;
let player = 1;

class Square extends React.Component{
    constructor(){
        super();
        this.symbol = " ";
        this.id = i;
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
            <div onClick = "handleClick(this.id, this.symbol)">{this.symbol}</div>
        )
    }
} 

let allSquares = [];
for (let j = 1; j < 10; j++){
    allSquares.push(new Square());
}

let table = <table>
                <tr>
                    <td>{allSquares[0]}</td>

                    <td>{allSquares[1]}</td>

                    <td>{allSquares[2]}</td>
                </tr>

                <tr>
                    <td>{allSquares[3]}</td>

                    <td>{allSquares[4]}</td>

                    <td>{allSquares[5]}</td>
                </tr>

                <tr>
                    <td>{allSquares[6]}</td>

                    <td>{allSquares[7]}</td>

                    <td>{allSquares[8]}</td>
                </tr>
</table>


export default function MainBoard(){
    return (
        <div>
            <div>{table}</div>
            <div>It is player {player}'s turn</div>
        </div>
    )
}