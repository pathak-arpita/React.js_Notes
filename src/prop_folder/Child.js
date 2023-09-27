function Child({count ,setCount}){
    return(
        <>
         <h1>This is Child Component :{count}</h1>
         <button onClick={()=>setCount(count-1)}>Decrement</button> &nbsp;
        </>
    )
}

export default Child;