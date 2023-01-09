import Router from "next/router";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import useData from "../stores/useData";
import { LockClosedIcon } from '@heroicons/react/solid'
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth } from "../config/firebase";

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

  async function onSubmit(event) {
    setLoading(true)
    event.preventDefault();
    try {
        const user = await signInWithEmailAndPassword(auth, formData.username, formData.password)

        if (user) {
          setAuthenticated(true)
          Router.push("/")
        }

    } catch (error) {
        console.log(error);
    }
  }
  // async function onSubmit(event) {
  //   setLoading(true)
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`${API_URL}/api/account/login/`, {
  //         method: "POST",
  //         headers: {
  //             "Content-type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       login(data.key);
  //       const returnedData = await getUserData()
  //       setData(returnedData)
        
  //       Router.push("/")
  //       setLoading(false)

  //     } else if (response.status == 400) {
  //       const error1 = await response.json()
  //       let errorMessage = ""
  //       for (let key in error1){
  //         console.log(error1[key])
  //         errorMessage = errorMessage + (`${error1[key]}\n`)
  //       }
  //       setError(errorMessage) 
  //     } else {
  //       setError("We could'nt perform this action right now, please try again later.") 
  //     }

  //     if (response) {setLoading(false)}

  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

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
            <form onSubmit={onSubmit}>
                <div className="inputs">
                  <div className="form-group first-name">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Username"
                      onChange={onChange}
                      value={username}
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={onChange}
                      value={password}
                    />
                  </div>
                </div>
                <button type="submit" className="contained stretch">Login</button>
            </form>
            </>
            }
        </div>
    </div>
  );
}

