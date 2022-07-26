import React from 'react'
import logo from '../Ilim.svg'
import Dashboard_icon from '../icons/dashboard_icon.js'
import History_icon from '../icons/history_icon.js'
import Practice_icon from '../icons/practice_icon.js'
import Settings_icon from '../icons/settings_icon.js'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <aside className='side'>
        <div className='dummy'></div>
        <div className='navbar-parent'>
            <div className='navbar'>
                <div className='topsection'>
                    <div className='logo'>
                        <img src={logo} alt=''></img>
                    </div>
                </div>
                <div className='middlesection'>
                    <ul className='navbar-list'>
                        <li className='navbar-item'>
                            <NavLink to="" className='navbar-link'>
                                <div className='navbar-icon'><Dashboard_icon /></div>
                                <div className='navbar-title'>Dashboard</div>
                            </NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink to="/practice" className='navbar-link'>
                                <div className='navbar-icon'><Practice_icon /></div>
                                <div className='navbar-title'>Practice</div>
                            </NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink to="/history" className='navbar-link'>
                                <div className='navbar-icon'><History_icon /></div>
                                <div className='navbar-title'>History</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='bottomsection'>
                    <ul className='navbar-list'>
                        <li className='navbar-item'>
                            <NavLink to="/settings" className='navbar-link'>
                                <div className='navbar-icon'><Settings_icon /></div>
                                <div className='navbar-title'>Settings</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
  )
}