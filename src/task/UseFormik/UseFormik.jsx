import { useFormik } from 'formik'
import React, { useState } from 'react'

const UseFormik = () => {
    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
    const [editIndex, setEditindex] = useState(null)
    const [list, setList] = useState([])
    const f = useFormik({
        initialValues: ini,
        onSubmit: (values) => {
            console.log(values);
            setList([...list, values])
            f.handleReset()
        }
    })
    const handleDelete = (index) => {
        list.splice(index, 1)
        setList([...list])
    }
    const handleEdit = (index) => {
        setIni(list[index].name);
        setIni(list[index].surname);
        
        setEditindex(index)

    }
    return (
        <div>
            <form action="" onSubmit={f.handleSubmit}>
                name <input type="text" name='name' onChange={f.handleChange} value={f.values.name} />
                surname <input type="text" name='surname' onChange={f.handleChange} value={f.values.surname} />
                <button type='submit'>Submit</button>
            </form>
            <table className='table '>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                    <td colSpan={2}>Action</td>
                </tr>
                {
                    list.map((item, index) => {
                        return (

                            <tr>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>delete</button>
                                </td>
                            </tr>
                        )

                    })
                }
            </table>
        </div>
    )
}

export default UseFormik
