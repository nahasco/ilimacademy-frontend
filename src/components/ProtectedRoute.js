import useStore from "../stores/userStore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { API_URL } from "../config";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children, router }) => {
  //Identify authenticated user
  const isLoggedIn = useStore((state) => state.isLoggedIn)
  const user = useStore((state) => state)
  const login = useStore((state) => state.login)

  useEffect(() => {
    const key = localStorage.getItem("key")

    if (key !== null) {
      async function fetchUser() {
        const response = await fetch(`${API_URL}/api/account/user/`, {
          method: "GET",
          headers: {
            "Content-type":"application/json",
            "Authorization": `Token ${key}`
          }
        })
        const result = await response.json()
        console.log(result)
        if (response.ok) {
          login(result.username, key)
        }
      }

      fetchUser()
    }
  }, []);

  
  console.log(isLoggedIn)
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
