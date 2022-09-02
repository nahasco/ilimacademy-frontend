import HeaderMain from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'

export default function SettingsPage() {
  return (
    <>
      <HeaderMain heading={"Settings"}></HeaderMain>
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