// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// useRef directly perform operations on DOM.

import React,{useRef} from 'react'

function UseRefComponent() {
    const inputRef = useRef(null);

    function handleClick(){
       inputRef.current.value = '1000';
       inputRef.current.style.backgroundColor = 'black';
       inputRef.current.style.color = 'white';
       inputRef.current.style.border = '2px solid red';
    }   
  return (
    <>
     <h1>This is useEffect Component</h1> 
     <input type='text' ref={inputRef}/> &nbsp;
     <button onClick={handleClick}>Click ME!!!!</button>
    </>
  )
}

export default UseRefComponent
