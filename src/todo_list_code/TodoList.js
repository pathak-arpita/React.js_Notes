import React , {useState} from 'react';

function TodoList(){
    const [input , setInput] = useState('');
    const [list , setList] = useState([]);

    function addToList(){
        const todo = [...list , input];
        setList(todo);
        setInput('');
    }

    const removeToList = (index) =>{
        const newTodod = [...list];
        newTodod.splice(index,1 );  
        setList([...newTodod]);
    }
    return(
        <div>
            <h1>This is code for ToDo List</h1>
            <input type = 'text' value={input} onChange={(e) => setInput(e.target.value)}/> &nbsp;
            <button onClick={addToList}>Add</button>
            <ol>
                {
                    list.map((item,index)=>{
                        return(
                            <>
                             <li>{item}</li>
                             <button onClick={() => removeToList(index)}>X</button>
                            </>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default TodoList;