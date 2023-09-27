import React , { useState , useEffect } from 'react';

function Stopwatch(){
    const [time , setTime] = useState(0);
    const [running , setRunning] = useState(false);

    useEffect(()=>{
         let interval;
         if(running){
            interval = setInterval(()=>{
               setTime((prev)=>prev+10)
            },10)
         }
         else if(!running){
            clearInterval(interval)
         }

         return ()=>clearInterval(interval);
    },[running])
    return(
        <>
        <h1>This is Stopwatch Code</h1>
        <div>
            <span>{("0" + Math.floor((time /60000)%60)).slice(-2)} : </span> &nbsp;
            <span>{("0" + Math.floor((time/1000)%60)).slice(-2)} : </span> &nbsp;
            <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
        </div>
        <button onClick={()=>setRunning(true)}>Start</button>&nbsp;
        <button onClick={()=>setRunning(false)}>Pause</button>&nbsp;
        <button onClick={()=>setTime(0)}>Reset</button>&nbsp;
        </>
    )
}

export default Stopwatch;