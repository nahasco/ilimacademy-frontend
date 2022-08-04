import User_icon from '../icons/user_icon.js'
import Notifications_icon from '../icons/notifications_icon.js'

import { API_URL } from '../config/index';
import Router from 'next/router';
import useStore from '../stores/userStore.js';

export default function Header({heading}) {
  const logout = useStore((state) => state.logout)
  async function Logout (event) {
    const response = await fetch(`${API_URL}/api/account/logout/`, {
      method: "POST",
      headers: {"Content-type": "application/json"}
    })

    if (response.ok) {
      console.log("logged out")
      logout()
      Router.push('/login')
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
