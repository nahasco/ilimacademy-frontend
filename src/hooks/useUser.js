import { useState, useEffect } from "react";
import { getAuthenticatedUser, getUserData } from "../utils/common";
import useData from "../stores/useData";
import useStore from "../stores/userStore";

export function getUser() {

    const login = useStore((state) => state.login);
    const setLoading = useStore((state) => state.setLoading);
    const setData = useData((state) => state.setData);
    const data = useData((state) => state.data)

    const [user, setUser] = useState(null);
    const [authenticated, setAutenticated] = useState(null);

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();

            if (authenticated) {
                login(user, localStorage.getItem("key"));
                // const newdata = await getUserData();
                // setData(newdata);
            }

            setUser(user);
            setAutenticated(authenticated);
            setLoading(false);
        }
        getUserDetails();
    }, []);
    return { user, authenticated};
}
