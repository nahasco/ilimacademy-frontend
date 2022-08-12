import Header from '../components/layout/Header'
import Layout from '../components/layout/Layout'

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