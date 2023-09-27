import React ,{useContext} from 'react';
import Child from './Child';
import GrandChild from './GrandChild';
import { GlobalContext } from './UseContextComponent';

function Parent() {
    const{appColor} = useContext(GlobalContext);
  return (
    <>
      <h1 style={{color : appColor}}>This is Parent Component </h1>
      <Child />
      <GrandChild />
    </>
  )
}

export default Parent;
