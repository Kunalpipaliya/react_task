import React, { useRef } from 'react'

const UseRefExample = () => {
    const inputRef=useRef()
    const handleChange=()=>{
        inputRef.current.style.color="red"
    }
  return (
    <div className='w-50 my-5 m-auto'>
        <input type="text" ref={inputRef} onChange={handleChange} />
        <br />
        <input type="text" />
    </div>
  )
}

export default UseRefExample
