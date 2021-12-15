
import './App.css';
import UndoRedo from './UndoRedo';
import {useState, useCallback, useRef} from 'react';

// function App() {
//     const [text, setText] = useState('');
//     const [curr, setCurr] = useState('');
//     const [currVal, setCurrVal] = useState([]);
//     //let setCurrVal = []; //Better way?

//     console.log("App Render");

//     const onBlurHanler = (evt) => {
//          console.log("Blur Hanlder Called");
//          setCurr(currVal.join(''));
//          setCurrVal([]);
//     }

// //     const onBlurHanler = useCallback((evt) => {
// //         console.log(currVal);
// //         setCurr(currVal.join(''));
// //         setCurrVal([]);
// //    })

//     const updateEleVal = (obj) => {
//         console.log('Update Call from UndoRedo Comp');
//         setText(obj);
//     }
    

//   return (
//     <div className={`App`}>
//         <textarea  value={text} onChange={(e) => {
//             debugger;
//             console.log("Target", e.target.value);
//             setText(e.target.value);
//             let charStr = e.target.value && e.target.value.charAt(e.target.value.length - 1);

//             setCurrVal([...currVal, charStr]);
//         }} onBlur={(e) => {
//             onBlurHanler(e)
//         }} ></textarea>
//         <UndoRedo textVal = {curr} updateEleVal={updateEleVal}></UndoRedo>
      
//     </div>
//   );
// }

function useUndo([message, setMessage]){
    console.log("Message", message);
    const historyRef = useRef([message]);
    const [index, setIndex] = useState(0);

    function undo(){
        setIndex(index - 1);
    }

    function redo(){
        setIndex(index + 1);
    }
    
    function nextSetMessage(val){
        const nextIndex = index + 1;
        console.log("REF",historyRef);
        historyRef.current[nextIndex] = val;
        setIndex(nextIndex);
        setMessage(val);
        console.log("ONCANE");
    }
    return [historyRef.current[index], nextSetMessage, undo, redo];
}


//HOC Component
function App() {
    const [text, nextSetMessage, undo, redo] = useUndo(useState(''));

    console.log("App Render", text);

  return (
    <div className={`App`}>
        <textarea  value={text} onChange={(e) => {

            nextSetMessage(e.target.value);

        }} onBlur={(e) => {
            //onBlurHanler(e)
        }} ></textarea>

        <div>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        </div>
        
    </div>
  );
}

export default App;
