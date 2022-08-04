import Head from 'next/head'
import '../styles/globals.scss'
import ProtectedRoute from '../components/ProtectedRoute'
import PrivateRoute from '../components/PrivateRoute';

export default function MyApp({ Component, pageProps}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const unprotectedRoutes = ['/login', '/register'];

  return getLayout(
    <ProtectedRoute>
      <Head><title>Ilim Academy</title></Head>
      <Component {...pageProps} />
    </ProtectedRoute>
  )
}