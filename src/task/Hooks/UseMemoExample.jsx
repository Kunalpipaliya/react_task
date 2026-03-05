import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [count,setCount]=useState(0)
    const counter=useMemo(()=>{
        return count*count
    })
  return (
    <div>
        <p>{count}</p>
        <p>{counter}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default UseMemoExample
