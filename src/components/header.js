import React from 'react'
import User_icon from '../icons/user_icon.js'
import Notifications_icon from '../icons/notifications_icon.js'

export default function header() {
  return (
    <header className='header'>
      <h1 className='page-title'>Hello, Mohamed</h1>
      <div className='header-icons'>
        <div className='header-icon'><Notifications_icon /></div>
        <div className='header-icon'><User_icon /></div>
      </div>
    </header>
  )
}
