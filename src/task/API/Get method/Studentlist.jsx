import axios from 'axios'
import React, { useState } from 'react'

const Studentlist = () => {
    const [students,setStudents]=useState([])
    const token="dWlGaqSRKbUdNnyo"
    axios.get("https://generateapi.techsnack.online/api/students",{
      headers:{
        Authorization:token
      }
    })
    .then((res)=>{
        console.log(res.data.Data);
        setStudents(res.data.Data)
        
    }).catch((error)=>{
        console.log(error);
        
    })
  return (
    <div>
      {
        students.map((item,index)=>{
          return(
            <div key={index}>
              <p>{item.firstname}</p>
              <p>{item.lastname}</p>
              <p>{item.course}</p>
              
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default Studentlist
