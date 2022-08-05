import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "../common";
import useStore from "../stores/userStore";

export function useUser() {
    const login = useStore((state) => state.login);
    const [user, setUser] = useState(null);
    const [authenticated, setAutenticated] = useState(null);
    const setLoading = useStore((state) => state.setLoading);

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();

            if (authenticated) {
                login(user, localStorage.getItem("key"));
            }

            setUser(user);
            setAutenticated(authenticated);
            setLoading(false);

            console.log("ok");
        }
        getUserDetails();
    }, []);
    return { user, authenticated };
}
