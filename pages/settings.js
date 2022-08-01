import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function SettingsPage() {
  return (
    <>
      <Header heading={"Settings"}></Header>
      settings
    </>
  )
}

SettingsPage.getLayout = function getLayout(SettingsPage) {
  return (
    <Layout>
      {SettingsPage}
    </Layout>
  )
}