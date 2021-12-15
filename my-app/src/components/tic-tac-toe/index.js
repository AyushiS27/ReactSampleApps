import './index.css'
import { useEffect, useState } from "react";


function generateGame(size){
    return new Array(size).fill(0).map((item) => new Array(size).fill(-1));
}

function winner(gameData, size, rIndex, cIndex){
    let winner;

    console.log("Spec: ", cIndex, rIndex);
    //Row
    for(var i = 0; i < size; ++i){
        if(gameData[rIndex][i] === -1 || (gameData[rIndex][i] !== gameData[rIndex][cIndex])){
            break;
        }
    }

    //Column
    for(var j = 0; j < size; ++j){
        if(gameData[j][cIndex] === -1 || (gameData[j][cIndex] !== gameData[rIndex][cIndex])){
            break;
        }
    }

    //Diagonal
    if((rIndex + cIndex) === size -1 ){
        for(var k = 0; k < size; ++k){
            if(gameData[k][size-k - 1] === -1 || (gameData[k][size-k - 1] !== gameData[rIndex][cIndex])){
                break;
            }
        }   
    }else if(rIndex === cIndex) {
        for(var k = 0; k < size; ++k){
            if(gameData[k][k] === -1 || (gameData[k][k] !== gameData[rIndex][cIndex])){
                break;
            }
        }   
    }


    if(i === size || j === size || k === size ){
        winner = gameData[rIndex][cIndex];
    }
    

    



    return winner;

}

const Board = ({size}) => {
    
    const [gameData, setGameData] = useState(generateGame(size));
    const [turn, setTurn] = useState(0);
    const [winnerPlayer , setWinner] = useState();

    const onCellClick = (cIndex, rIndex) => {
        console.log("Click");
        if(gameData[cIndex][rIndex] != -1){
            return;
        }

        gameData[cIndex][rIndex] = turn;
        setGameData([...gameData]);
        setTurn(+!turn);
        setWinner(winner(gameData, size, cIndex, rIndex));
    }

    const paintRows = (column, cIndex) => {
        return gameData[cIndex].map((row, rIndex) => <div className={`cell_player cell_player_${row}`} onClick={() => onCellClick(cIndex, rIndex)}></div>)
    }

    const paintColumn = () => {
        return gameData.map((column, cIndex) => {
            return <div className="column">{paintRows(column, cIndex)}</div>
        })
    }


    return (<div className="Board">
        <h1> Winner : Player {winnerPlayer} </h1>
        {paintColumn()}
        </div>)
}




export default function TicTacToe(){

    return <>
        <h1>Tic Tac Toe</h1>
        <Board size={3}></Board>
    </>;
}