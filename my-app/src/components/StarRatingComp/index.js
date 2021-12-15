import { useState, useRef, useEffect, useCallback } from "react";
import './index.css';

export default function StarRating({times}) {
    const [currIndex, setCurrIndex] = useState(-1);
    const [hoverIndex, setHoverIndex] = useState(-1);

    useEffect(() => {
    
    })

    
    const onClickHandler = useCallback((e) => {
        console.log(e.target.getAttribute('data-index'));
        setCurrIndex(e.target.getAttribute('data-index'));
    },[times]);

    const onMouseOverHandler = (e) => {
        console.log("Mouse Over : ", e.target.classList.contains("item-obj"))
        if(e.target.classList.contains('item-obj')){
            setHoverIndex(e.target.getAttribute('data-index'));
        }
        
    }

    const onMouseOutHandler = (e) => {
        if(e.target.classList.contains('item-obj')){
            setHoverIndex(currIndex);
        }
    }

    return <>
        <div>Rating Componet</div>
        <div className={'ratings-container'} onClick={onClickHandler} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
            {times && new Array(times).fill(0).map((ele, index) => {
                return <div className={`item-obj ${currIndex >= index || hoverIndex >= index? 'add' : ''}`} data-index={index}></div>
            })}
        </div>
        
    </>;
  }
