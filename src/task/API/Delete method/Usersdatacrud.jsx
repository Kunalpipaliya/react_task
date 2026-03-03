import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Usersdatacrud = () => {
    const token = "tY7LTVOVaHUc7WAL"
    const [ini, setIni] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [users, setUsers] = useState([])
    const [editIndex, setEditindex] = useState(null)
    axios.get("https://generateapi.techsnack.online/api/users", {
        headers: {
            Authorization: token
        }

    }).then((res) => {
        setUsers(res.data.Data)

    })
        .catch((err) => {
            console.log(err);

        })
    const handleSubmit = (values, { resetForm }) => {
        if (editIndex !== null) {
            axios.patch(`https://generateapi.techsnack.online/api/users/${editIndex}`,values, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    alert("data updated successfully")
                    setEditindex(null)
                    setIni({
                        username: '',
                        email: '',
                        password: ''
                    })
                    resetForm()

                }).catch((err) => {
                    console.log(err);

                })
                
        }
        else {

            axios.post("https://generateapi.techsnack.online/api/users", values, {
                headers: {
                    Authorization: token
                }
            })
                .then(() => {
                    alert("form submitted successfully!");

                    resetForm()
                })
                .catch((err) => {
                    console.log(err);

                })
        }
    }
    const handleDelete = (id) => {
        axios.delete(`https://generateapi.techsnack.online/api/users/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                alert("deleted Successfully");

            }).catch((err) => {
                console.log(err);

            })
    }

    const handleEdit = (user) => {

        setEditindex(user._id)
        setIni({
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
    return (
        <div>
            <Formik
                initialValues={ini}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                <Form className='w-50 m-auto mt-5 p-3 rounded-4 shadow-lg'>
                    <div className="form-group mb-2">
                        <label htmlFor="" className="form-label">Username</label>
                        <Field className="form-control" name="username" placeholder="enter Username"></Field>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="" className="form-label">Email</label>
                        <Field className="form-control" type="email" name="email" placeholder="enter Email"></Field>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="" className="form-label">password</label>
                        <Field className="form-control" type="password" name="password" placeholder="enter password"></Field>
                    </div>
                    <button className="btn btn-primary w-100" type='submit'>{editIndex !== null ? "update" : "submit"}</button>
                </Form>
            </Formik>
            <table className='table table-bordered w-50 m-auto mt-5'>
                <thead>

                    <tr>
                        <th className='bg-info'>Username</th>
                        <th className='bg-info'>Email</th>
                        <th className='bg-info'>Password</th>
                        <th className='bg-info'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button className="btn btn-danger me-2" type='submit' onClick={() => handleDelete(item._id)}>Delete</button>
                                        <button className="btn btn-primary" type='submit' onClick={() => handleEdit(item)}>Update</button>
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

export default Usersdatacrud

