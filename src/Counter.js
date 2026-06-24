import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () =>{
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
