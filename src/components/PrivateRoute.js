import { useEffect, useState } from 'react';
import {auth} from "../config/firebase"
import useData from "../stores/useData";
import useSWR from "swr";
import { API_URL } from "../config";
import Router from 'next/router';
import { useRouter } from "next/router";
import useStore from "../stores/userStore";
import FullPageLoader from "./FullPageLoader";
import { signOut } from 'firebase/auth';

const fetcher = async (url, key) => {
    const res = await fetch(url, { headers: { Authorization: key, "Content-type": "application/json" } })
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        // Attach extra info to the error object.
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    return res.json()
}

function PrivateRoute({ children }) {
    const router = useRouter();
    const unprotectedRoutes = ["/login", "/register"];
    const protectedRoutes = unprotectedRoutes.indexOf(router.pathname) === -1;
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const setToken = useStore((state) => state.setToken);
    const token = useStore((state) => state.token);
    const setData = useData((state) => state.setData)
    const userData = useData((state) => state.data)
    const [authenticated, setAuthenticated] = useState(null)
    const authenticating = useStore((state) => state.authenticating);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser && !authenticating) {
                fetch(`${API_URL}/api/app/data/`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: currentUser.accessToken
                    },
                })
                .then(response => {
                    if (response.ok) {
                        setAuthenticated(true);
                        setToken(currentUser.accessToken)
                        return response.json();
                    } else {
                        setAuthenticated(false);
                        setLoading(false);
                        return null
                    }
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    setAuthenticated(false)
                    return null
                });
            } else {
                setAuthenticated(false);
                setLoading(false);
                return null
            }
        });
        return () => unsubscribe();
    }, [authenticating]);

    if (loading || (authenticated && !userData) || authenticated==null) {
        return <FullPageLoader />;
    }

    if (authenticated && unprotectedRoutes.includes(Router.route)) {
        Router.push('/');
        return null;
    }

    if (!authenticated && protectedRoutes) {
        Router.push('/login');
        return null;
    }

    return children;
}

export default PrivateRoute;