import React, { createContext, useState } from 'react'
import First from './First'
import Second from './Second'
export const dataContext=createContext()
const UseContextExample = () => {
    const [no,setNo]=useState(0)
    const [text,setText]=useState('text')
    const handleStates=()=>{
        setNo(no+1)
        setText("hello")
    }
  return (
    <div>
       <dataContext.Provider value={{no,text}}>
            <First></First>
            <Second></Second>
        </dataContext.Provider> 
        <button onClick={handleStates}>click</button>
    </div>
  )
}

export default UseContextExample
