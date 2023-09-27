// The React useMemo Hook returns a memoized value.
// The useMemo Hook only runs when one of its dependencies update.

// useMemo accepts two arguments. The second argument is optional -
//     1. Arrow Function OR function.
//     2. Dependency array 

 
import React,{useState, useMemo } from 'react';

function UseMemoComponent() {
    const [count, setCount] = useState(0);
    useMemo(()=>{
        console.log('useMemo is Called');
    },[])
  return (
    <>
      <h1>This is useMemo Component : {count}</h1>
       <button onClick={()=>setCount(count+1)}>Click Me!!!</button>
    </>
  )
}

export default UseMemoComponent


