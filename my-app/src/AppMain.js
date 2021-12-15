import logo from './logo.svg';
import './App.css';
import React, {useEffect, useRef, useState, useCallback, Suspense} from 'react';
import CustomTextInput from './components/CustomClass';
import TaskBoard from './TaskReader';
import TicTacToe from './components/tic-tac-toe'
// import CustomButton from './components/CustomButton';
import SearchBox from './components/Dropdown';
import ButtonPlayPause from './components/ButtonPlayPause';
import Counter from './components/prevHook';
import StarRating from './components/StarRatingComp';
import SnakeLadderGame from './components/SnakeLadderGame';
import Tooltip from './components/Tooltip';

// function App() {
//   let iframeRef = useRef('');

//   return (
//     <div>
//       <CustomTextInput/>
//     </div>
//   );
// }

/* Ref example - Ref passed from class to child component and used forward Ref */

class App extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef(); 
    }

    componentDidMount(){
        
       // console.log("Ref Value", this.textInput);
        //this.textInput.current.focus();
    }

    

    render(){
        // const OtherComp =  React.lazy(() => import('./components/CustomButton'))
        return(
            <div>
               {/* <CustomTextInput ref={this.textInput}/> */}
               {/* <TicTacToe></TicTacToe> */}
               
                {/* <OtherComp /> */}
            
               <SearchBox/>
               {/* <CustomButton/> */}
               {/* <TaskBoard/> */}
               {/* <ButtonPlayPause /> */}

               {/* <StarRating times={5}/> */}

               {/* <SnakeLadderGame/> */}
               {/* <h1>Hello, this is a React tooltip demo</h1>
                <p> Try hovering the emojis below </p>
                <div className={'example-wrapper'}>
                    <Tooltip placement={'RIGHT'} text={'Left Tooltip'}>
                        <button className={'btn-tooltip'}>Tooltip Button</button>
                    </Tooltip>
                </div> */}

               
               {/* <Counter/> */}
            </div>
        )
    }
}

export default App;
