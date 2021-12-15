import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {actionIncrementCount} from './reducer';

export const Blogs = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();
   return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(actionIncrementCount())}>Add to count</button>
    </main>
  );
};





