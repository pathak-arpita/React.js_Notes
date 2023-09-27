import React ,{useContext} from 'react';
import { GlobalContext } from './UseContextComponent';

function GrandChild(){
    const{appColor} = useContext(GlobalContext);
    return(
        <>
         <h1 style={{color : appColor}}>This is Grand Child Component </h1>
        </>
    )
}

export default GrandChild;