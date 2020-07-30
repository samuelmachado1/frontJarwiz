import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('https://centraldeerrowebapi20200718183730.azurewebsites.net/v1/register', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Register</h1>
            <p>Preencha os campos abaixo para criar um novo usuário</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            placeholder="Nome completo"
                            name="fullName"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="fullName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu email"
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite uma senha"
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Confirme senha"
                            name="confirmPassword"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="confirmPassword"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Register</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register
