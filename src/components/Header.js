import User_icon from '../icons/user_icon.js'
import Notifications_icon from '../icons/notifications_icon.js'

import { API_URL } from '../config/index';

export default function Header({heading}) {

  async function Logout (event) {
    const response = await fetch(`${API_URL}/api/account/logout/`, {
      method: "POST",
      headers: {"Content-type": "application/json"}
    })

    if (response.ok) {
      console.log("logged out")
      localStorage.clear();
    }
  }

  return (
    <header className='header'>
      <h1 className='page-title'>{heading}</h1>
      <div className='header-icons'>
        <div className='header-icon'><Notifications_icon /></div>
        <div className='header-icon'><User_icon /></div>
      </div>
      <button onClick={Logout}>Logout</button>
    </header>
  )
}
