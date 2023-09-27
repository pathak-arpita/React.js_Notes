//  The React useState Hook allows us to track state in a function component.
// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:
//   1. The current state.
//   2. A function that updates the state.

// For Example -------------->
// const[ data , setData ] = useState([])
//         ^        ^
//         |        |
//         |        |
//         |        |------- function that updates the state
// current state   


import {useState} from 'react';

function UseStateComponent(){
    const[count , setCount] = useState(10);
    return(
        <>
         <h1>This is useState Component</h1>
          <h2>Initial Count is : 10</h2> 
          <h2>Updated Count is : {count}</h2> 
          <button onClick={()=>setCount(count+1)}>Increment</button> &nbsp;
          <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}

export default UseStateComponent;