import React, { useEffect, useState } from "react"
import Router from "next/router";

import { API_URL } from '../config/index';


function RegisterPage() {

    const [error , setError] = useState()

    const[formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password1: "",
        password2: "",
    })

    const {
        first_name,
        last_name,
        username,
        email,
        password1,
        password2
    } = formData;

    function onChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    // function onSubmit(event) {
    //     event.preventDefault()
    //     fetch("http://localhost:8000/api/account/register/", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(formData) 
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log()
    //         if (data.key) {
    //            // Router.push('/')
    //         }
    //         if (!data.key) {
    //             console.log(data)
    //             setError()
    //             length = Object.keys(data).length
    //             for (const [key, value] of Object.entries(data)) {
    //                 setError({
    //                     ...error,
    //                     key: value[0]
    //                 })
    //             }
    //         }
    //     })
        
    //     .catch((err)=>{
    //         console.log(err)
    //         setError(`Something went wrong when trying to to create an account \n (${err})`)
    //     })
    // }   

    async function onSubmit(event) {
        event.preventDefault()
        try {
            const response = await fetch(`${API_URL}/api/account/register/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData) 
                })

            if (response.ok) {
                console.log("success")
                const data = await response.json()
                localStorage.setItem("key", data.key)
                console.log(localStorage.getItem("key"))
                Router.push('/')
            }
        } catch(error) {
            console.log(error)
        }

        }


    return (
        <div className="register-container">
            <div className="wrapper">
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group first-name">
                        <label htmlFor='first_name'>
                            First Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            onChange={onChange}
                            value={first_name}
                            required
                        />
                    </div>
                    <div className="form-group last-name">
                        <label htmlFor='last_name'>
                            Last Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            name='last_name'
                            placeholder='Last Name'
                            onChange={onChange}
                            value={last_name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            name='username'
                            placeholder='Username'
                            onChange={onChange}
                            value={username}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            name='email'
                            placeholder='Email'
                            onChange={onChange}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password1'>
                            Password
                        </label>
                        <input
                            className='form-control'
                            type='password'
                            name='password1'
                            placeholder='Password'
                            onChange={onChange}
                            value={password1}
                            minLength='8'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password2'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            name='password2'
                            placeholder='Confirm Password'
                            onChange={onChange}
                            value={password2}
                            minLength='8'
                            required
                        />
                    </div>

                    <button type='submit'>
                            Create Account
                    </button>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage