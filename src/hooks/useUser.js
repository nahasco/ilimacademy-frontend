import { useState, useEffect } from "react";
import { getAuthenticatedUser, getUserData } from "../utils/common";
import useData from "../stores/useData";
import useStore from "../stores/userStore";

export function useUser() {
    const login = useStore((state) => state.login);
    const setLoading = useStore((state) => state.setLoading);
    const setData = useData((state) => state.setData);

    const [user, setUser] = useState(null);
    const [authenticated, setAutenticated] = useState(null);


    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();
            const data = await getUserData();

            if (authenticated) {
                login(user, localStorage.getItem("key"));
                setData(data);
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
