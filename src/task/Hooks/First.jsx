import React, { useContext } from 'react'
import { dataContext } from './UseContextExample'

const First = () => {
    const {no,text}=useContext(dataContext)
  return (
    <div>
        <h1>{no}</h1>
        <h1>{text}</h1>
    </div>
  )
}

export default First
