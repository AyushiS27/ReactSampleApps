import { useState, useRef, useEffect } from "react";

export default function Counter() {
    console.log("Counter FUnction Called 1");
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    useEffect(() => {
        console.log("Counter Useeffect run");
    })

    console.log("Counter FUnction Called 2");
    const onClickHandler = () => {
        setCount(count + 1);
    }
    return <h1 onClick={onClickHandler}>Now: {count}, before: {prevCount}</h1>;
  }
  
  function usePrevious(value) {
    console.log("Use Prev Hook Called", value);
    const ref = useRef();
    useEffect(() => {
        console.log("Use Prev Hook Run", value);
      ref.current = value;
    }, [value]);
    return ref.current;
  }