import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Head><title>Ilim Academy</title></Head>
      <Component {...pageProps} />
    </>
  )
}