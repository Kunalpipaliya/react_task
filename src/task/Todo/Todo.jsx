import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState([])
    // const [isCompleted, setIscompleted] = useState(false)
    const [editIndex, setEditindex] = useState(null)
    const isCompleted = false
    const handleAdd = () => {
        if (!todo.trim()) return
        if (editIndex !== null) {
            const updatedlist = [...todolist]
            updatedlist[editIndex] = { todo, isCompleted }
            setTodolist(updatedlist)
            setEditindex(null)
        }
        else {
            const obj = { todo, isCompleted: false }
            setTodolist([...todolist, obj])
            // setIscompleted(false)
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
                index === i ? { ...item, isCompleted: !item.isCompleted } : item
            )
        })
        setTodolist(updatedlist)

        // todolist[index].isCompleted === true ? setIscompleted(todolist[index].isCompleted = false) : setIscompleted(todolist[index].isCompleted = true)
        // console.log(todolist);
        // setIscompleted(false)
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
                                    <div className={item.isCompleted === true ? "d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-danger border-start border-danger align-items-center gap-2 " : "d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-primary border-start border-primary align-items-center gap-2"}>
                                        {/* <div className="d-flex justify-content-between p-2 border border-4 border-end-0 border-top-0  border-bottom-0 alert alert-primary border-start border-primary align-items-center gap-2"> */}
                                        <div className='d-flex gap-2'>
                                            <input type="checkbox" name="" id="" onChange={() => handleToggle(index)} checked={item.isCompleted == true} />
                                            <span className={item.isCompleted === true ? "text-decoration-line-through" : ""}>{item.todo}</span>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <button type='button' onClick={() => handleEdit(index)} className={item.isCompleted === false ? "btn btn-primary" : "d-none"}>Edit</button>
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



