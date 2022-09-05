import { useState } from "react";
import Router from "next/router";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import Link from "next/link";

export default function RegisterPage() {
    const setLoading = useStore((state) => state.setLoading);
    const isLoading = useStore((state) => state.isLoading);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const { first_name, last_name, username, email, password1, password2 } =
        formData;

    function onChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    async function onSubmit(event) {
        setLoading(true)
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/account/register/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) Router.push("/login")
            if (response) setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="register-container">
            <div className="wrapper">
                {isLoading 
                ? 
                <div>Loading...</div>
                :
                <>
                <h1 className="page-title">Register</h1>
                <div className="account-massage">Already have an account? <Link href="/login">Login</Link></div>
                <form onSubmit={onSubmit}>
                    <div className="inputs">
                    <div className="form-group first-name">
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            onChange={onChange}
                            value={first_name}
                            required
                        />
                    </div>
                    <div className="form-group last-name">
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            onChange={onChange}
                            value={last_name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={onChange}
                            value={username}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            name="password1"
                            placeholder="Password"
                            onChange={onChange}
                            value={password1}
                            minLength="8"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={onChange}
                            value={password2}
                            minLength="8"
                            required
                        />
                    </div>
                    </div>
                    <button type="submit" className="contained stretch">Create Account</button>
                </form>
                </>
                }
            </div>
        </div>
    );
}
