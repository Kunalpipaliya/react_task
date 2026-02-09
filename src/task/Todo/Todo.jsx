import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState([])
    let obj = { todo }
    const handleClick = () => {
        setTodolist([...todolist, obj])
        setTodo('')
    }
    const handleDelete=(index)=>{
        todolist.splice(index,1)
        setTodolist([...todolist])
        
    }

    const handleEdit=(index)=>{
        alert("you clicked edit button")
        
    }
    return (
        <div>
            <div className="container p-4 rounded-4 " style={{ background: "#00000096 ", backgroundImage: "url('https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg')", height: "500px", overflow: "auto" ,backgroundSize:"cover"}}>
                <div className="d-flex align-items-center gap-2">

                    <input type="text" placeholder='Add Task ' value={todo} className='form-control w-75' onChange={(e) => setTodo(e.target.value)} />
                    <button className="btn btn-primary w-25" onClick={handleClick}>Add Task</button>
                </div>
                {
                    todolist.map((item, index) => {
                        return (
                            <>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center p-2 text-white rounded" style={{ background: "#00000063", backdropFilter: "blur(10px)" }}>

                                    <div className="d-flex align-items-center gap-3 " >
                                        <input type="checkbox" name="" id="" />
                                        <span>{item.todo}</span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary" type='button' onClick={()=>handleEdit(index)} >Edit</button>
                                        <button className="btn btn-danger" type='button' onClick={()=>handleDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
