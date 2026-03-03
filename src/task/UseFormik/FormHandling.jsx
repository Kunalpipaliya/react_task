import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormHandling = () => {
    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
    const [editIndex, setEditindex] = useState(null)
    const [list, setList] = useState([])
    const handleSubmit = (values, { resetForm }) => {
        if (!values.name.trim() || !values.surname.trim()) return alert('please fill all the field')
        if (editIndex !== null) {
            const updated = [...list]
            updated[editIndex] = values
            setList(updated)
            setEditindex(null)
            setIni({
                name: '',
                surname: ''
            })
        }
        else {

            setList([...list, values])
        }
        resetForm()
    }
    const handleDelete = (index) => {
        list.splice(index, 1)
        setList([...list])
    }
    const handleEdit = (index) => {
        setIni(list[index])
        setEditindex(index)

    }
    return (
        <div>
            <Formik
                initialValues={ini}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                <Form>
                    <Field name="name" type="text" placeholder="enter name"></Field>
                    <br />
                    <br />
                    <Field name="surname" type="text" placeholder="enter surname"></Field>
                    <br />
                    <br />
                    <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
                </Form>
            </Formik>
            <table border={1} className='table table-bordered'>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                    <td>update</td>
                    <td>delete</td>
                </tr>
                {
                    list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td><button className='btn btn-primary' type='button' onClick={() => handleEdit(index)}>Update</button></td>
                                <td><button className='btn btn-danger' type='button' onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default FormHandling
