import React, { useContext } from 'react'
import { dataContext } from './UseContextExample'

const Second = () => {
    const {no,text}=useContext(dataContext)
  return (
    <div>
        <h1>{text}</h1>
        <h1>{no}</h1>
    </div>
  )
}

export default Second
