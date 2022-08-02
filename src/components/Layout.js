import Navbar from "./Navbar"
import Header from "./Header"

function Layout({ children }) {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <div className='main'>
          <div className='pages'>
            { children }
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout