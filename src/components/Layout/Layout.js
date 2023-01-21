import Image from "next/image"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <div className='body-container'>
        <Navbar/>
        <div className='main'>
          <div className="mobile-header">
            <Image src='/Ilim.svg' alt='' width="50" height="50"></Image>
          </div>
          <div className='pages'>
            { children }
          </div>
          <div className="dummy-header-space"></div>
        </div>
      </div>
    </>
  )
}