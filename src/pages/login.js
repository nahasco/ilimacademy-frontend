import Router from "next/router";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import useData from "../stores/useData";
import { LockClosedIcon } from '@heroicons/react/solid'
import { getUserData } from "../utils/common";

export default function LoginPage() {
  const login = useStore((state) => state.login);
  const setData = useData((state) => state.setData);
  const datastore = useData((state) => state.data)
  const setLoading = useStore((state) => state.setLoading);
  const isLoading = useStore((state) => state.isLoading);

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
      const response = await fetch(`${API_URL}/api/account/login/`, {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        login(username, data.key);
        const returnedData = await getUserData()
        setData(returnedData)
        Router.push("/")
        setLoading(false)
      }

      if (response) {setLoading(false)}

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
            <h1 className="page-title">Login</h1>
            <div className="account-massage">Don't have an account? <Link href="/register">Register</Link></div>
            <form onSubmit={onSubmit}>
                <div className="inputs">
                  <div className="form-group first-name">
                    <label htmlFor="username">
                      Username
                    </label>
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
                    <label htmlFor="password">
                      Password
                    </label>
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

