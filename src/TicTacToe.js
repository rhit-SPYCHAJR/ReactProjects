import React from "react";
import "./ttt.css";

//player 1 is X, player 2 is O
//player 1 always goes first

class BoardManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          player: 1,
          symbols: this.generateEmpty(9),
          status: 1
        }
    }

    generateEmpty(i){
        let x = new Array(i);
        for (let k = 0; k < i; k++){
            x[k] = " ";
        }
        return x
    }

    at(i){
        return this.state.symbols[i-1];
    }

    detectWin(){
        for(let a=1;a<8;a+=3) if ((this.at(a) != " ") && (this.at(a) == this.at(a+1) && this.at(a+1) == this.at(a+2))) return this.at(a); //rows
        for(let b=1;b<4;b++) if ((this.at(b) != " ") && (this.at(b) == this.at(b+3) && this.at(b+3) == this.at(b+6))) return this.at(b);  //cols
        if ((this.at(1) != " ") && (this.at(1) == this.at(5) && this.at(5) == this.at(9))) return this.at(1); // diagonal \
        if ((this.at(3) != " ") && (this.at(3) == this.at(5) && this.at(5) == this.at(7))) return this.at(3); // diagonal /
        return false;
    }

    nextTurn(){
        let winner = this.detectWin();
        if (winner) {
            alert(winner + " has won!");
            this.setState({player: this.state.player,
                           symbols: this.state.symbols,
                           status: 0});
        }
        else this.setState({player: this.state.player == 1 ? 2 : 1,
                            symbols: this.state.symbols,
                            status: 1});
    }

    arrayTransform(arr, i){
        let x = arr;
        arr[i] = plToSym(this.state.player);
        return x
    }

    squareClicked(i){
        if (this.state.status == 0) return;
        this.setState({player: this.state.player, 
                       symbols: this.arrayTransform(this.state.symbols, i),
                       status: 1});
        this.nextTurn();
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <Square symbol = {this.state.symbols[0]} onClick={() => {this.squareClicked(0)}}/>
                            <Square symbol = {this.state.symbols[1]} onClick={() => {this.squareClicked(1)}}/>
                            <Square symbol = {this.state.symbols[2]} onClick={() => {this.squareClicked(2)}}/>
                        </tr>

                        <tr>
                            <Square symbol = {this.state.symbols[3]} onClick={() => {this.squareClicked(3)}}/>
                            <Square symbol = {this.state.symbols[4]} onClick={() => {this.squareClicked(4)}}/>
                            <Square symbol = {this.state.symbols[5]} onClick={() => {this.squareClicked(5)}}/>
                        </tr>

                        <tr>
                            <Square symbol = {this.state.symbols[6]} onClick={() => {this.squareClicked(6)}}/>
                            <Square symbol = {this.state.symbols[7]} onClick={() => {this.squareClicked(7)}}/>
                            <Square symbol = {this.state.symbols[8]} onClick={() => {this.squareClicked(8)}}/>
                        </tr>
                    </tbody>
                </table>
                <CurrentTurn player = {this.state.player}/>
            </div>
        )
    }
} 

function plToSym(player){
    if (player == 1) return "X";
    else return "O";
}

function Square({symbol, onClick}){
    return (
        <td onClick = {onClick}>{symbol}</td>
    )
} 

function CurrentTurn({player}){
    return (
        <div>
            Current player: {plToSym(player)} <br/>
        </div>
    )
}

export default function App(){
    return (
        <div>
            <BoardManager/>
        </div>
    )
}