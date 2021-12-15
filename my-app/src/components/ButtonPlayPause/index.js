import { useEffect, useRef, useState } from "react";

export default function ButtonPlayPause(){
    const [timer, setTimer] = useState(5);
    const [pause, setPause] = useState(false);
    const [timesUp, setTimesUp] = useState(false);
    const timerSet = useRef();

    useEffect(() =>{
        console.log("Use Effect Runs");
        

        if(!pause){
            timerSet.current = setInterval(() => {
                setTimer((timer) => {
                    if(timer === 1) {setTimesUp(true); clearInterval(timerSet.current);}
                    return timer - 1;
                });
            }, 1000);
        }
        else{
            clearInterval(timerSet.current);
        }

    },[pause]);
    

    const onClickPause = () => {
        setPause(!pause);
    }

    return (<div >
        <span>{timer} &nbsp;</span>
        <button onClick={onClickPause}>{ pause ? 'Play' : 'Pause'}</button>
        <div>{timesUp ? "Times Up " : ""}</div>
    </div>)

}