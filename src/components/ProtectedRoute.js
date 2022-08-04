import useStore from "../stores/userStore";
import { useRouter } from "next/router";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
  //Identify authenticated user
  const isLoggedIn = useStore((state) => state.isLoggedIn)
  const router = useRouter()

  let unprotectedRoutes = [
    '/login',
    '/register'
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isLoggedIn && pathIsProtected) {
    router.push('/login');
  }

  return children;
};

export default ProtectedRoute;
