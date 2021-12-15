import React, { useState, useRef, useEffect } from "react";
import './index.css';


export const snakePositions = [
    {
      currentPosition: 22,
      gotoPosition: 11
    },
    {
      currentPosition: 98,
      gotoPosition: 27
    },
    {
      currentPosition: 89,
      gotoPosition: 5
    },
    {
      currentPosition: 45,
      gotoPosition: 17
    },
    {
      currentPosition: 67,
      gotoPosition: 39
    },
    {
      currentPosition: 59,
      gotoPosition: 23
    }
  ];
  export const ladderPositions = [
    {
      currentPosition: 10,
      gotoPosition: 21
    },
    {
      currentPosition: 26,
      gotoPosition: 97
    },
    {
      currentPosition: 16,
      gotoPosition: 80
    },
    {
      currentPosition: 19,
      gotoPosition: 44
    },
    {
      currentPosition: 38,
      gotoPosition: 66
    },
    {
      currentPosition: 24,
      gotoPosition: 58
    }
  ];



const getNamesofPlayers = (num) => {
    let str = [];
    for(let i = 0; i < num ; ++i){
      str.push(`P${i+1}`);
    }
    
    return str;
}

const initializePosition = (playersList) => {
  let obj = {};
  playersList.forEach((ele) => {
    obj[ele] = 1;
  })

  return obj;
}

export default function SnakeLadderGame(){
    let counter = -1, reverse = false;
    const [dice, setDice] = React.useState('');
    const currPos = React.useRef(1);
    const [currPosStatePLAYER_1, setCurrPoStatePLAYER_1] = useState(currPos.current);
    const [currPosStatePLAYER_2, setCurrPoStatePLAYER_2] = useState(currPos.current);
    const playersList = getNamesofPlayers(2);
    const [playerPosition , setPlayersPosition] = useState(initializePosition(playersList));
    
    const [gameOver, setGameOver] = useState(false);
    const chance = React.useRef('P1');;
    // const playersList = ['PLAYER_1', 'PLAYER_2'];

    // useEffect(() => {
    //   console.log("Chance update", chance.current.split('')[1], playersList.length);
    //   if(!chance.current || chance.current.split('')[1] == playersList.length){
    //     chance.current = 'P1';
    //   }
    //   else{
    //     chance.current =  `P${+(chance.current.split('')[1]) + 1}`;
    //   }
      
      
    // },[dice]);

    console.log("Positons", playerPosition, " ; ", chance.current);
    const checkLadderPosition = (newPos) => {
        
        snakePositions.forEach((ele) => {
            if(ele.currentPosition === newPos){
                //console.log("Snake pos", ele.gotoPosition);
                currPos.current = ele.gotoPosition;
            }
        })

        ladderPositions.forEach((ele) => {
            if(ele.currentPosition === newPos){
                console.log("Ladder pos", ele.gotoPosition);
                currPos.current = ele.gotoPosition;
            }
        })
        
        setPlayersPosition((prev) => {
          //console.log("Prev", prev);
          let obj  = {...prev};

          obj[chance.current] = currPos.current;

          console.log("Position set, ", obj);
          return obj;
        });

        if(!chance.current || chance.current.split('')[1] == playersList.length){
          chance.current = 'P1';
        }
        else{
          chance.current =  `P${+(chance.current.split('')[1]) + 1}`;
        }
        
    }

    const updatePlayerPosition = React.useCallback((dice) => {

        const newPos = currPos.current + dice;

        console.log("value dice",  dice);
        currPos.current = newPos;

        if(newPos >= 100){
            //console.log("Game Over");
            currPos.current = 1;
            
            setGameOver(true);
        }
        checkLadderPosition(newPos);
    });

   

    const onDiceClick = React.useCallback(() => {
        let x = Math.floor((Math.random() * 6)) + 1;
        setDice(Math.floor((Math.random() * 6)) + 1);
        updatePlayerPosition(x);
    },[]);

    return <div>
        <button onClick={onDiceClick}>DICE</button>
        {gameOver && <div className = "game-over">Game Over</div>}
        <div className={'snake-ladder-comp'}>
        
            {new Array(10).fill(0).map((ele, index1) => {
                
                reverse = !reverse;
                {return <div className={'row-box'}>
                    {
                        new Array(10).fill(0).map((ele1, index2) => {
                            ++counter;
                            return  <div className={'comp-item'}>
                                <span>{100 - counter}</span>

                                {playersList.map((ele, index) => {
                                    //if(ele === chance){
                                        //console.log("heelo", (chance === 'PlAYER_1'? currPosStatePLAYER_1 : currPosStatePLAYER_2))
                                        return (100 - counter) === playerPosition[ele] && <span className={`dice ${ele}`}></span>
                                    //}
                                })}

                                {/* {(100 - counter) === currPosState && <span className={`dice ${player1 ? 'player1' : ''}`}></span>} */}
                            </div>;
                        }) 
                    }
                </div>}
                
            })}
        </div>


    </div>
    
}