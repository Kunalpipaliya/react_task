import React, { useState } from 'react'

const FormData = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [list, setList] = useState([])
    const [editIndex, setEditindex] = useState(null)
    const handleClick = () => {
        if(!name.trim()||!surname.trim()) return;
        if (editIndex !== null) {
            const updatedList = [...list]
            updatedList[editIndex] = { name,surname }
            setList(updatedList)
            setEditindex(null)

        }
        else {

            const obj = { name, surname }
            setList([...list, obj])
        }
        setName('')
        setSurname('')
    }
    const handleDelete = (index) => {
        list.splice(index, 1)
        setList([...list])
    }
    const handleUpdate = (index) => {
        setName(list[index].name)
        setSurname(list[index].surname)
        setEditindex(index)
    }
    return (
        <div className='my-5'>
            <h3>Form handling</h3>

            <form className='w-50 m-auto shadow-lg p-4 rounded-3 shadow-sm' action={"#"}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Name</label>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name ' className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Surname</label>
                    <input value={surname} type="text" onChange={(e) => setSurname(e.target.value)} placeholder='Enter Surname ' className="form-control" />
                </div>
                <button className="btn btn-primary w-100" type='button' onClick={handleClick}>{editIndex!==null?"update":"Submit"}</button>
            </form>
            <table className='table w-50 m-auto mt-5'>
                <thead>

                    <tr>
                        <th className='bg-warning'>Name</th>
                        <th className='bg-warning'>surname</th>
                        <th colSpan={2} className='bg-warning'></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>

                                        <button className='btn btn-primary me-3' type='button' onClick={() => handleUpdate(index)}>Update</button>
                                        <button className='btn btn-danger' type='button' onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FormData
