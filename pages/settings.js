import Head from 'next/head'
import Header from '../components/Header'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Header heading={Settings}></Header>
      settings
    </>
  )
}