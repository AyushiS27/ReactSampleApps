import React , {useRef} from 'react';

/* Class ref passed implementation. If you want to use any child function from parent ... Here in this case the parent component wants to trigger focusTextInput of child's comp using ref hence ref is exposed to parent . This works only for parent comp*/

// class CustomTextInput extends React.Component {
//     constructor(props) {
//       super(props);
//       // create a ref to store the textInput DOM element
//       this.textInput1 = React.createRef();
//       this.focusTextInput = this.focusTextInput.bind(this);
//     }
  
//     focusTextInput() {
//       // Explicitly focus the text input using the raw DOM API
//       // Note: we're accessing "current" to get the DOM node
//       this.textInput1.current.focus();
//     }
  
//     render() {
//       // tell React that we want to associate the <input> ref
//       // with the `textInput` that we created in the constructor
//       return (
//         <div>
//           <input
//             type="text"
//             ref={this.textInput1} />
//           <input
//             type="button"
//             value="Focus the text input"
//             onClick={this.focusTextInput}
//           />
//         </div>
//       );
//     }
//   }


/* Forward REf Imp*/
//   const CustomTextInput = React.forwardRef((props, ref) => {
//     const focusTextInput = ()=> {
//         // Explicitly focus the text input using the raw DOM API
//         // Note: we're accessing "current" to get the DOM node
//         ref.current.focus();
//       }
//     return (
//         <div>
//           <input
//             type="text"
//             ref={ref}
//             onClick={focusTextInput} />
//           <input
//             type="button"
//             value="Focus the text input"
//             onClick={focusTextInput}
//           />
//         </div>
//       );
//   });




/* Callback Ref Eg */
  function CustomTextInputChild(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
  }
  
  class CustomTextInput extends React.Component {
    
    componentDidMount(){
        console.log("Input Ref", this.inputElement);
    }

    render() {
      return (
        <CustomTextInputChild
          inputRef={el => this.inputElement = el}
        />
      );
    }
  }
  

  export default CustomTextInput;