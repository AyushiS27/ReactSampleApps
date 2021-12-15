import './UndoRedo.css';
import { useRef, useState, useCallback, useEffect  } from 'react';


export default function UndoRedo(props){
    const [currList, setCurrList] = useState([]);
    const [redoList, setRedoList] = useState([]);
    console.log("UNdo REdo REloads");
    
    
    useEffect(() => {
        
        setCurrList([...currList, props.textVal]);
        console.log("Compon did UNdo mount");
    },[props.textVal]);



    /* 
       
       3. Check with Hemkaran if something else was reqyuired here abt resusable component
       4. how will u make a component which contains another component and add features to it like HOC but its said HOC should nt be inside render as it will always craete diff comp which will ask react to mount the content again
    */
    // const clickUndo = useCallback(() => {
    //     let obj = currList.pop();
    //     setRedoList([...redoList, obj]);
    //     setCurrList(currList);
    //     props.updateEleVal(currList.join(''));
    // },[currList, redoList]);

    const clickUndo = () => {
        console.log("click Undo");
        let obj = currList.pop();
        setRedoList([...redoList, obj]);
        setCurrList(currList);
        props.updateEleVal(currList.join(''));
    };

    const clickRedo = () => {
        
        let obj = redoList.pop();
        setCurrList([...currList, obj]);
        props.updateEleVal([...currList, obj].join(''));
        console.log("XYZ", currList, " :: ", redoList);
    };

    // const clickRedo = useCallback(() => {
    //     console.log("Before XYZ", currList, " :: ", redoList);
    //     let obj = redoList.pop();
    //     setCurrList([...currList, obj]);
    //     props.updateEleVal([...currList, obj].join(''));
    //     console.log("XYZ", currList, " :: ", redoList);
    // },[currList, redoList])

    return(<div className="undo-container">
            <div className="btn-list">
                <button className="undo" onClick={() => {clickUndo()}}>Undo</button>
                <button className="redo" onClick={() => {clickRedo()}}>Redo</button>
            </div>
        </div>)
}


