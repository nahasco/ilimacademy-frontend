import Head from "next/head";
import "../styles/globals.scss";
import PrivateRoute from "../components/PrivateRoute";
import useStore from "../stores/userStore";
import { useUser } from "../customhooks/useUser";

export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const unprotectedRoutes = ["/login", "/register"];
  const login = useStore((state) => state.login);
  useUser();

  return getLayout(
    <PrivateRoute unprotectedRoutes={unprotectedRoutes}>
      <Head>
        <title>Ilim Academy</title>
      </Head>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}
