import "./App.css";
import { useState, useEffect } from "react";

var listVal = [
  { name: "Math", time: 0, active : false },
  { name: "Phhsics", time: 0 , active : false},
  { name: "Math2", time: 0 , active : false}
];

function transformList(list, item, method){

    if(method == 'add'){
        list = [...list, item];
    }
    let newlist = list.map((ele) => {
        ele.active = ele.name  === item.name;
        return ele;
    });
    return newlist;
}

export default function TaskBoard() {
  const [list, setList] = useState(listVal);

  const addTask = (task) => {
    let taskEle = { name: task, time: 0, active : true };
    setList(transformList(list, taskEle, 'add'));
  };

  const resumeTask = (item) => {
    setList(transformList(list, item));
  }

  return (
    <div class="task-container">
    <h1> Task Scheduler </h1>

      <AddTask addTask={addTask}></AddTask>
      <ListTaskWithTimer list={list} resumeTask={resumeTask}></ListTaskWithTimer>
    </div>
  );
}

function AddTask(props) {
  const [inpVal, setInpVal] = useState("");
  return (
    <div class="addTask">
      <input
        type="text"
        value={inpVal}
        onChange={(evt) => {
          setInpVal(evt.target.value);
        }}
      />
      <button onClick={() => props.addTask(inpVal)}>Add Task</button>
    </div>
  );
}


function ListTaskWithTimer(props) {
  console.log("ListTaskWithTimer CAlled");
    // Table css required
  return (
    <table className="task-container"> 
      <th>Task</th>
      <th>Spent Time</th>
      {props.list.map((item) => {
        return (
          <TaskEle item={item} resumeTask={props.resumeTask}></TaskEle>
        );
      })}
    </table>
  );
}

function TaskEle(props){
  const [time , setTime] = useState(0);
  
  console.log("Task Ele render");

  useEffect(() => {
      console.log("Creating a new timer", props.item.active);
      let timerElapse;

      if(props.item.active){
        timerElapse = setInterval(function(){
            setTime(time => time + 1);
        }, 1000);
      }
      else{
        clearInterval(timerElapse);
      }
      
      return () => clearInterval(timerElapse);
  },[props.item.active]);

  const onResume = () => {
    props.resumeTask(props.item);
  }
  
  return(
    <tr>
      <td>{props.item.name}</td>
      <td>{time}</td>
      <td>
        <button onClick={onResume}>Resume</button>
      </td>
    </tr>
  );
}
