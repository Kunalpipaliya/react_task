import React, { useCallback, useState } from 'react'

const ButtonUi=React.memo(({val})=>{
    return <button onClick={val}>click</button>
})

const UseCallbackExample = () => {
    const [count,setCount]=useState(0)
    const counter=useCallback(()=>{
        setCount(count+1)
    })
  return (
    <div>
        {count}
        <ButtonUi val={counter}></ButtonUi>
    </div>
  )
}

export default UseCallbackExample
