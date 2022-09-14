import Head from "next/head";
import "../styles/globals.scss";
import PrivateRoute from "../components/PrivateRoute";
import useStore from "../stores/userStore";
import { useUser } from "../hooks/useUser";
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);  
  
  return getLayout(
    <>
      <PrivateRoute>
        <Head>
          <title>Ilim Academy</title>
        </Head>
        <Component {...pageProps} />
      </PrivateRoute>
    </>
  );
}
