import axios from 'axios'
import React, { useState } from 'react'

const Userlist = () => {
    const [users,setUsers]=useState([])
    const token="mcCzO2A2yVThWOd4"
    axios.get("https://generateapi.techsnack.online/api/users",{
        headers:{
            Authorization:token
        }
    })
    .then((res)=>{
        console.log(res.data.Data);
        setUsers(res.data.Data)
    })
    .catch((err)=>{
        console.log(err);
    })
  return (
    <div>
      {
        users.map((item,index)=>{
            return(
                <div key={index}>
                    <h1>{item.firstname}</h1>
                    <h1>{item.lastname}</h1>
                    <h1>{item.age}</h1>
                    <h1>{item.gender}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Userlist
