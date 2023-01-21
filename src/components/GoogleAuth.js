import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { API_URL } from '../config';
import firebase from 'firebase/compat/app';
import Router from 'next/router';
import useStore from '../stores/userStore';

export default function GoogleAuth({setLoading}) {
    const setToken = useStore((state) => state.setToken);
    const setAuthenticating = useStore((state) => state.setAuthenticating);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    async function GoogleSignIn() {
        setAuthenticating(true)
        setLoading(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const email = result.user.email
            setToken(result.user.accessToken)
            fetch(`${API_URL}/api/account/register/`, {
                method: "Post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({email: result.user.email, password: result.user.accessToken}) 
            }).then((response) => {
                setAuthenticating(false)
                setLoading(false)
            })
        }).catch((error) => {
            console.log(error)
            setAuthenticating(false)
            setLoading(false)
        });

    }
    return (
        <button onClick={() => GoogleSignIn()} className='google-btn login-with-google-btn'>Sign in with Google</button>
    )
}

