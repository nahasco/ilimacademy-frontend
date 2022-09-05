import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../stores/userStore";
import FullPageLoader from "./FullPageLoader";
import useData from "../stores/useData";
import useSWR from "swr";
import { API_URL } from "../config";

const fetcher = async (url, key) => {
    const res = await fetch(url, { headers: { Authorization: "Token " + key, "Content-type": "application/json" } })
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

export default function PrivateRoute({ children }) {
    const unprotectedRoutes = ["/login", "/register"];
    const key = useStore((state) => state.key);
    const router = useRouter();
    const isLoading = useStore((state) => state.isLoading);
    const setLoading = useStore((state) => state.setLoading);
    const isAuthenticated = useStore((state) => state.isLoggedIn);
    const setData = useData((state) => state.setData)
    const userdata = useData((state) => state.data)

    const { data, error } = useSWR(isAuthenticated ? [`${API_URL}/api/app/data/`, key] : null, fetcher);

    const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathIsProtected) {
            // Redirect route, you can point this to /login
            router.push("/login");
        }

        if (data) setData(data);
        console.log("refresh")

    }, [isLoading, isAuthenticated, pathIsProtected, data]);

    if ((isLoading || !isAuthenticated ) && pathIsProtected) {
        return <FullPageLoader />;
    }

    if (isAuthenticated && !userdata) return <FullPageLoader />;
        
    return children;
}
