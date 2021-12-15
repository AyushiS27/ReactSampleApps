import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState, useCallback} from 'react';

function onMouseEnterHandler(evt){
  return true;
}



function App() {
  let iframeRef = useRef('');
  const [overlay, setOverlay] = useState(false);

  const onMouseLeaveHandler = useCallback((evt) => {
    console.log("On Mouse Leave", evt.target);
    return false;
  },[]);

  useEffect(() => {
    //iframeRef.onload = () => { //Iframe on load doesnot work in reactjs
      //console.log("After Mont", iframeRef.current.contentWindow);
    //}
    
  });



  return (
    <div className={`App ${overlay ? 'showOverlay' : 'hideOverlay'}`}>
      {/* <textarea></textarea> */}
      {/* {ref= {(val) => iframeRef = val}} */}
      {/* <iframe ref= {iframeRef} src="http://localhost:3000/iframe.html"></iframe> */}


      {/* Overlay */}
      <textarea id="activeEle" onMouseEnter = {() => setOverlay(onMouseEnterHandler)} onMouseLeave= {(e) => {setOverlay(onMouseLeaveHandler(e))}}></textarea>
    </div>
  );
}

export default App;
