import Router from "next/router";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import useData from "../stores/useData";
import { LockClosedIcon } from '@heroicons/react/solid'
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth } from "../config/firebase";
import GoogleAuth from "../components/GoogleAuth";
import { Button } from "../components/Button";

export default function LoginPage() {
  const setData = useData((state) => state.setData);
  const datastore = useData((state) => state.data)
  const setAuthenticated = useStore((state) => state.setAuthenticated)
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  function onChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    setLoading(true)
    event.preventDefault();

    signInWithEmailAndPassword(auth, formData.username, formData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (user) {
        setAuthenticated(true)
        Router.push("/")
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode)
      setLoading(false)
    });
  }

  return (
    <div className="register-container">
        <div className="wrapper">
            {loading 
            ? 
            <div>Loading...</div>
            :
            <>
            <h1 className="page-title">Login</h1>
            <div className="account-massage">Don't have an account? <Link href="/register">Register</Link></div>
            {error  && <div className="error">{error}</div>}
            <form onSubmit={onSubmit} className="mt-8">
                <div className="inputs">
                  <div className="form-group">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none"
                      placeholder="Username"
                      onChange={onChange}
                      value={username}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none"
                      placeholder="Password"
                      onChange={onChange}
                      value={password}
                    />
                  </div>
                </div>
                <Button type="submit" buttonStyle="btn--primary--solid" buttonSize="btn--full">Login</Button>   
            </form>
            <div className="p-4">Or</div>
            <GoogleAuth setLoading={setLoading}/>
            </>
            }
        </div>
    </div>
  );
}

