import { useState, useEffect } from "react";
import { getAuthenticatedUser, getUserData } from "../utils/common";
import useData from "../stores/useData";
import useStore from "../stores/userStore";

export function useUser() {

    const login = useStore((state) => state.login);
    const setLoading = useStore((state) => state.setLoading);
    const authenticated = useStore((state) => state.isAuthenticated)
    const [fatalError, setFatalError] = useState(false)

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user, error } = await getAuthenticatedUser();

            if (error) setFatalError(true)

            if (authenticated) login(localStorage.getItem("key"));

            setLoading(false);
        }
        getUserDetails();
    }, []);

    return { authenticated, fatalError };
}
