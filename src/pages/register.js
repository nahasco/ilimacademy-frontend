import { useState } from "react";
import Router from "next/router";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import Link from "next/link";
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { Button } from "../components/Button";
import GoogleAuth from "../components/GoogleAuth";

export default function RegisterPage() {
    const setLoading = useStore((state) => state.setLoading);
    const isLoading = useStore((state) => state.isLoading);
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
    });

    const { email, password, password2 } =
        formData;

    function onChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    async function onSubmit(event) {
        setLoading(true)
        setError(null)
        event.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/account/register/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    if (user) {
                        Router.push("/login")
                    }
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode)
                    // ..
                });
            }

            else if (response.status == 400) {
                const error = await response.json()
                let errorMessage = ""
                for (let key in error){
                    console.log(error[key])
                    errorMessage = errorMessage + (`${error[key]}\n`)
                }
                setError(errorMessage)
                setLoading(false)
                } 
            
            else {
                setError("We could'nt perform this action right now, please try again later.") 
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
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
                { error && <div className="error">{error}</div>}
                <form onSubmit={onSubmit} className="mt-8">
                    <div className="inputs">
                    <div className="form-group">
                        <input
                            className="flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none"
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
                            autoComplete="new-password"
                            className="flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            value={password}
                            minLength="8"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            autoComplete="new-password"
                            className="flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none"
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
                    <Button type="submit" buttonStyle="btn--primary--solid" buttonSize="btn--full">Create Account</Button>
                </form>
                <div className="p-4">Or</div>
                <GoogleAuth setLoading={setLoading}/>
                </>
                }
            </div>
        </div>
    );
}
