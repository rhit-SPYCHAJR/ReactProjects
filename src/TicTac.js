import React from "react";
import "./styles.css";

//player 1 is X, player 2 is O
//player 1 always goes first

class BoardManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          player: 1,
          symbols: Array(9).fill(" ")
        }
    }

    at(i){
        return this.state.symbols[i];
    }

    detectWin(){
        console.log("bingo");
        for(let a=1;a<4;a+=3) if ((at(a) != " ") && (at(a) == at(a+1) && at(a+1) == at(a+2))) return at(a);
        for(let b=1;b<4;b++) if ((at(b) != " ") && (at(b) == at(b+3) && at(b+3) == at(b+6))) return at(b);
        if ((at(1) != " ") && (at(1) == at(5) && at(5) == at(9))) return at(1);
        if ((at(3) != " ") && (at(3) == at(5) && at(5) == at(7))) return at(3);
        return false;
    }

    nextTurn(){
        let winner = detectWin();
        if (winner) alert(winner + " has won!");
        this.setState({player: this.player == 1 ? 2 : 1});
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