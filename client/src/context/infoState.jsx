import React from 'react'
import infoContext from './infoContext'
const infoState=(props)=>{
    const [hindi,setHindi]=useState(false)
    const [action,setAction]=useState(false)
    const [drama,setDrama]=useState(false)
  const val=3
    const handledrana=()=>{
      setDrama(!drama)
    }
   
    const handleaction=()=>{
      setAction(!action)
    }
   
    const handlehindi = () => {
      setHindi(!hindi);
    };
  
    return(
        <infoContext.Provider value={{hindi,val,setAction,setDrama,setHindi,drama,action}}>
            {props.childern}
        </infoContext.Provider>
    )
}
export default infoState