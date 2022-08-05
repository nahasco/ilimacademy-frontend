import Head from 'next/head'
import '../styles/globals.scss'
import ProtectedRoute from '../components/ProtectedRoute'
import PrivateRoute from '../components/PrivateRoute';
import useStore from '../stores/userStore';
import { useEffect } from 'react';
import { API_URL } from '../config';

import LoginPage from './login';

import { useUser } from '../components/useUser';
import Router from 'next/router';

export default function MyApp({ Component, pageProps, router}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  
  const unprotectedRoutes = ["/login", "/register"]
  const login = useStore((state) => state.login);
  const {user, authenticated} = useUser();

  return getLayout(
    <PrivateRoute unprotectedRoutes={unprotectedRoutes}>
      <Head><title>Ilim Academy</title></Head>
      <Component {...pageProps} />
    </PrivateRoute>
  )
} 
  // else {
  //   Router.push("/login");
  //   return;
  // }