import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { API_URL } from '../config';
import firebase from 'firebase/compat/app';
import Router from 'next/router';

export default function GoogleAuth({setLoading}) {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    async function GoogleSignIn() {
        setLoading(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            // const email = result.user.email
            // fetch(`${API_URL}/api/account/register/`, {
            //     method: "Post",
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            //     body: JSON.stringify(result.email) 
            // })
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });

    }
    return (
        <button onClick={() => GoogleSignIn()} className='google-btn login-with-google-btn'>Sign in with Google</button>
    )
}

