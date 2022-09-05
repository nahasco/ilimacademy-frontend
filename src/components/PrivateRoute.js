import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../stores/userStore";
import FullPageLoader from "./FullPageLoader";

export default function PrivateRoute({ unprotectedRoutes, children, data }) {
    const router = useRouter();
    const isLoading = useStore((state) => state.isLoading);
    const isAuthenticated = useStore((state) => state.isLoggedIn);

    const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathIsProtected) {
            // Redirect route, you can point this to /login
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, pathIsProtected]);

    if ((isLoading || !isAuthenticated) && pathIsProtected) {
        return <FullPageLoader />;
    }

    if (isLoading || !data) {
        return <FullPageLoader />;
    }
    
    return children;
}
