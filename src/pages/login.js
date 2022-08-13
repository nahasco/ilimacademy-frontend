import Router from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore";
import useData from "../stores/useData";
import { LockClosedIcon } from '@heroicons/react/solid'


export default function LoginPage() {
    const login = useStore((state) => state.login);
    const setData = useData((state) => state.setData);
    const datastore = useData((state) => state.data)

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
            console.log(username);
            login(username, data.key);
          }

          const token = localStorage.getItem("key");
          const response2 = await fetch(`${API_URL}/api/app/data/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${token}`
            }
          });

          const data2 = await response2.json();
          if (response2.ok) {
            setData(data2);
            Router.push("/")
          }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        // <div className="register-container">
        //     <div className="wrapper">
        //         <h1>Login</h1>
        //         <form onSubmit={onSubmit}>
        //             <div className="form-group">
        //                 <label htmlFor="username">Username</label>
        //                 <input
        //                     className="form-control"
        //                     type="text"
        //                     name="username"
        //                     placeholder="Username"
        //                     onChange={onChange}
        //                     value={username}
        //                     required
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="password">Password</label>
        //                 <input
        //                     className="form-control"
        //                     type="password"
        //                     name="password"
        //                     placeholder="Password"
        //                     onChange={onChange}
        //                     value={password}
        //                     required
        //                 />
        //             </div>
        //             <button type="submit">Login</button>
        //         </form>
        //     </div>
        // </div>

        <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="/Ilim.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
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
                  <label htmlFor="password" className="sr-only">
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
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}