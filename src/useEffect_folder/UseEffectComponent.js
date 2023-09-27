// The useEffect Hook allows you to perform side effects in your components.
// Examples of side effects -----------> fetching data

//useEffect accepts two arguments. The second argument is optional -
//     1. Arrow Function OR function.
//     2. Dependency array 

// useEffect(()=>{}) -----------------> if there is no dependency array then EACH TIME component will RENDER.
// useEffect(()=>{},[]) -----------------> if there is EMPTY dependency array then component will 
//                                         RENDER ONLY ON MOUNTING TIME.
// useEffect(()=>{},[a,b]) --------------> if a or b changes the effect will run again and so on.


import React,{useState , useEffect} from 'react'

function UseEffectComponent() {
    const[count , setCount] = useState(10);
    const[data , setData] = useState([]);

    // useEffect(()=>{
    //     console.log("NO DEPENDENCY")
    // })

    // useEffect(()=>{
    //     console.log("EMPTY DEPENDENCY ARRAY")
    // },[])

    // useEffect(()=>{
    //     console.log("DEPENDENCY IS ON UPDATING COUNT")
    // },[count])
    
    useEffect(()=>{
        async function fetchData(){
            try{
                const resp = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses')
                const respData = await resp.json();
                console.log('respData' , respData);
                setData(respData.splice(0));
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])
  return (
    <>
         <h1>This is useEffect Component</h1>
         <h2>Updated Count is : {count}</h2> 
         <button onClick={()=>setCount(count+1)}>Increment</button>
         <hr />
         {
            data?.map((item)=>(
                <div key={item.id}>
                     <span>{item.id}</span> &nbsp;
                     <span>{item.busName}</span> &nbsp;
                     <span>{item.ticketPrice} ₹ </span> &nbsp;
                     <span>{item.arrivalTime}</span> &nbsp;
                     <span>{item.departureTime}</span>
                </div>
            ))
         }
         <hr />
        </>
  )
}

export default UseEffectComponent
