import { useState } from "react"

function Register() {

    const[formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        re_password: "",
    })

    const {
        first_name,
        last_name,
        username,
        password,
        re_password
    } = formData;

    function onChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function onSubmit(event) {

    }

    return (
        <div className="register-container">
            <div className="wrapper">
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    <div className="names">
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
                            minLength='8'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='re_password'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            name='re_password'
                            placeholder='Confirm Password'
                            onChange={onChange}
                            value={re_password}
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

export default Register