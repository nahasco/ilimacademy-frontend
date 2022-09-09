import { useState, useEffect } from "react";
import { getAuthenticatedUser, getUserData } from "../utils/common";
import useData from "../stores/useData";
import useStore from "../stores/userStore";

export function useUser() {

    const login = useStore((state) => state.login);
    const setLoading = useStore((state) => state.setLoading);
    const setData = useData((state) => state.setData);
    const data = useData((state) => state.data)

    const [user, setUser] = useState(null);
    const authenticated = useStore((state) => state.isAuthenticated)

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();

            if (authenticated) {
                login(localStorage.getItem("key"));
                // const newdata = await getUserData();
                // setData(newdata);
            }

            setUser(user);
            setLoading(false);
        }
        getUserDetails();
    }, []);
    return { user, authenticated };
}
