import Router from 'next/router';
import React, { useState, useContext } from 'react'
import Link from 'next/link';
import { API_URL } from '../config/index';

import useStore from '../stores/userStore';
import Layout from '../components/Layout';

export default function LoginPage() {
    const isLoggedIn = useStore((state) => state.isLoggedIn) 
    const login = useStore((state) => state.login)
    const username1 = useStore((state) => state.username)

    const[formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const {
        username,
        password
    } = formData;

    function onChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    
   

    async function onSubmit(event) {
        event.preventDefault()
        try {
            const response = await fetch(`${API_URL}/api/account/login/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData) 
                })

            if (response.ok) {
                const data = await response.json()
                console.log(username)
                login(username, data.key)
                Router.push('/');
            }
        } catch(error) {
            console.log(error)
        }

        }


    return (
        <div className="register-container">
            <div className="wrapper">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
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
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={onChange}
                            value={password}
                            required
                        />
                    </div>
                    <button type='submit'>
                            Login
                    </button>
                    <Link href="/" shallow>Dash</Link>
                    <div>{username1}</div>

                </form>
            </div>
        </div>
    )
}