import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState([])
    const [editIndex,setEditindex]=useState(null)
    const handleClick = () => {
        if(!todo.trim()) return
        if(editIndex!==null){
            const updatedList=[...todolist]
            updatedList[editIndex]={todo}
            setTodolist(updatedList)
            setEditindex(null)
        }
        else{
            let obj = { todo }

            setTodolist([...todolist, obj])
        }
        setTodo('')
    }
    const handleDelete=(index)=>{
        todolist.splice(index,1)
        setTodolist([...todolist])
        
    }

    const handleEdit=(index)=>{
       setTodo(todolist[index].todo)
       setEditindex(index)
        console.log(todolist);
        console.log(editIndex);
        
        
    }
    return (
        <div>
            <div className="container p-4 rounded-4 " style={{ background: "#00000096 ", backgroundImage: "url('https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg')", height: "500px", overflow: "auto" ,backgroundSize:"cover",backgroundPosition:"top,center"}}>
                <div className="d-flex align-items-center gap-2">

                    <input type="text" placeholder='Add Task ' value={todo} className='form-control w-75' onChange={(e) => setTodo(e.target.value)} />
                    <button className="btn btn-primary w-25" onClick={handleClick}>{editIndex!==null?"Update" : "Add task" }</button>
                </div>
                {
                    todolist.map((item, index) => {
                        return (
                            <>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center p-2 text-white rounded" style={{ background: "#00000063", backdropFilter: "blur(10px)" }}>

                                    <div className="d-flex align-items-center gap-3 " >
                                        <input type="checkbox" name="" id=""  />
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
