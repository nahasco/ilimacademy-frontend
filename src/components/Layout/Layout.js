import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <div className='body-container'>
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