import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormHandling = () => {
    const [list, setList] = useState([])
    return (
        <div>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: ''
                }}
                onSubmit={async (values) => {
                    await new Promise((e) => setTimeout(e, 500))
                    setList([...list, values])
                }}
            >

                <Form>
                    <label htmlFor="firstname">First Name</label>
                    <Field id="firstname" name="firstname" placeholder="First Name" />
                    <label htmlFor="lastname">Last Name</label>
                    <Field id="lastname" name="lastname" placeholder="Last Name" />
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="Email" type="email" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            {
                list.map((item, index) => {
                    return (
                        <div className="d-flex gap-2">

                            <p>{item.firstname}</p>
                            <p>{item.lastname}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FormHandling
