import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const Students = () => {
    const [students, setStudents] = useState([])
    const [ini, setIni] = useState({
        firstname: '',
        lastname: '',
        course: ''
    })
    const token = "dWlGaqSRKbUdNnyo"
    axios.get("https://generateapi.techsnack.online/api/students", {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setStudents(res)
        })
        .catch((error) => {
            console.log(error);

        })
    const handleSubmit = (values, { resetForm }) => {
        axios.post("https://generateapi.techsnack.online/api/students",values, {
            headers: {
                Authorization: token
            }

        })
            .then(() => {
                console.log("submited successfully");

                resetForm()
            })
            .catch((err) => {
                console.log(err);

            })
    }
    return (
        <div>
            <Formik
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field className="form-control" placeholder="enter first name" name="firstname"></Field>
                    <br />
                    <Field className="form-control" placeholder="enter last name" name="lastname"></Field>
                    <br />
                    <Field className="form-control" placeholder="enter course" name="course"></Field>
                    <br />
                    <button className="btn btn-primary" type='submit'>submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Students

