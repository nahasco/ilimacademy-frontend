import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../stores/userStore";
import FullPageLoader from "./FullPageLoader";
import useData from "../stores/useData";
import useSWR from "swr";
import { API_URL } from "../config";
import { useUser } from "../hooks/useUser";

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
    const { authenticated, fatalError } = useUser()
    const router = useRouter();
    const unprotectedRoutes = ["/login", "/register"];
    const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
    const key = useStore((state) => state.key);
    const isLoading = useStore((state) => state.isLoading);
    const setData = useData((state) => state.setData)
    const userdata = useData((state) => state.data)

    const { data, error } = useSWR(authenticated ? [`${API_URL}/api/app/data/`, key] : null, fetcher);

    useEffect(() => {
        
        if (!isLoading && !authenticated && pathIsProtected) router.push("/login");
        else if (!isLoading && authenticated && !pathIsProtected) router.push("/");
        if (data) setData(data);

    }, [isLoading, authenticated, pathIsProtected, data]);

    if (fatalError || error) return <div>Server error</div>;
    if ((( isLoading || !authenticated ) && pathIsProtected) || (authenticated && !userdata && !error)) return <FullPageLoader />;

    return children;
}
