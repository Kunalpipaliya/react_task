import axios from 'axios'
import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState([])
    // const [completed, setcompleted] = useState(false)
    const [editIndex, setEditindex] = useState(null)
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        setTodolist(res.data)
    })
    .catch((error)=>{
        console.log(error);
        
    })
    const completed = false
    const handleAdd = () => {
        if (!todo.trim()) return
        if (editIndex !== null) {
            const updatedlist = [...todolist]
            updatedlist[editIndex] = { todo, completed }
            setTodolist(updatedlist)
            setEditindex(null)
        }
        else {
            const obj = { todo, completed: false }
            setTodolist([...todolist, obj])
            // setcompleted(false)
        }
        setTodo('')
    }
    const handleDelete = (index) => {
        todolist.splice(index, 1)
        setTodolist([...todolist])
    }
    const handleEdit = (index) => {
        setTodo(todolist[index].todo)


        setEditindex(index)
    }
    const handleToggle = (index) => {

        const updatedlist = todolist.map((item, i) => {
            return (
                index === i ? { ...item, completed: !item.completed } : item
            )
        })
        setTodolist(updatedlist)

        // todolist[index].completed === true ? setcompleted(todolist[index].completed = false) : setcompleted(todolist[index].completed = true)
        // console.log(todolist);
        // setcompleted(false)
    }
    return (
        <div>
            <div className="container bg-light  shadow-lg p-3 rounded-4 md:w-75 m-auto " style={{ height: "600px", maxHeight: "600px", overflow: "auto" }}>
                <div className="d-flex gap-3">


                    <input type="text" placeholder='Add Task' value={todo} onChange={(e) => setTodo(e.target.value)} className='form-control w-75' />
                    <button type='button' onClick={handleAdd} className='btn btn-primary w-25'>{editIndex !== null ? "Update" : "Add Task"}</button>
                </div>
                <hr />
                {
                    todolist.length == 0 ? <>
                        <h1 className="text-center text-muted">no todos are added</h1>
                    </> :

                        todolist.map((item, index) => {
                            return (
                                <>
                                    <div className={item.completed === true ? "d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-danger border-start border-danger align-items-center gap-2 " : "d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-primary border-start border-primary align-items-center gap-2"}>
                                        {/* <div className="d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-primary border-start border-primary align-items-center gap-2"> */}
                                        <div className='d-flex gap-2'>
                                            <input type="checkbox" name="" id="" onChange={() => handleToggle(index)} checked={item.completed == true} />
                                            <span className={item.completed === true ? "text-decoration-line-through" : ""}>{item.title}</span>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <button type='button' onClick={() => handleEdit(index)} className={item.completed === false ? "btn btn-primary" : "d-none"}>Edit</button>
                                            <button type='button' onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
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



