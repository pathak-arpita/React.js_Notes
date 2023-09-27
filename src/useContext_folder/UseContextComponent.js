import React,{useState , createContext} from 'react'
import Parent from './Parent';

export const GlobalContext = createContext();

function UseContextComponent() {
    const [color,setColor]  = useState('green');
  return (
    <GlobalContext.Provider value={{appColor : color, setColor:setColor}}>
      <h1>This is useContext Component </h1>
      <Parent />
    </GlobalContext.Provider>
  )
}

export default UseContextComponent;
