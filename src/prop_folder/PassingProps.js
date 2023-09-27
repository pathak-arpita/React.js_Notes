import React,{useState} from 'react'
import Child from './Child';

function PassingProps() {
    const[count , setCount] = useState(1000);
  return (
    <>
      <h1>This is PassingProps Component </h1>
      <Child count={count} setCount={setCount}/>
      <button onClick={()=>setCount((prev)=>prev+2)}>Increment</button>
    </>
  )
}

export default PassingProps
