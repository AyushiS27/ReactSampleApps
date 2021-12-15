import {createStore} from 'redux';


const initialState = {
    count: 14
}
const countReducer = function (state = 0, action) {
    console.log("REducer Dispatch", state)
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };


  export const actionIncrementCount = () => {
      console.log("Action Dispatch")
      return{
          type: 'INCREMENT',
          payload: ''
      }
  }


  export const store = createStore(countReducer);

  
