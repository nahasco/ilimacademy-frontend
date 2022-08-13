import HeaderMain from '../components/layout/Header'
import Layout from '../components/layout/Layout'

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