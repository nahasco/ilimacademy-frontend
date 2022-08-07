import Dashboard_icon from '../../icons/dashboard_icon'
import History_icon from '../../icons/history_icon'
import Practice_icon from '../../icons/practice_icon'
import Settings_icon from '../../icons/settings_icon'

import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    return (
        <aside className='side'>
            <div className='dummy'></div>
            <div className='navbar-parent'>
                <div className='navbar'>
                    <div className='topsection'>
                        <div className='logo'>
                            <img src='/Ilim.svg' alt=''></img>
                        </div>
                    </div>
                    <div className='middlesection'>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>
                                <Link href="/">
                                    <a className={`navbar-link ${router.pathname == "/" ? "active" : ""}`}>
                                        <div className='navbar-icon'><Dashboard_icon /></div>
                                        <div className='navbar-title'>Dashboard</div>
                                    </a>
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link href="/practice/math">
                                    <a className={`navbar-link ${router.pathname.startsWith("/practice") ? "active" : ""}`}>
                                    <div className='navbar-icon'><Practice_icon /></div>
                                    <div className='navbar-title'>Practice</div>
                                    </a>
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link href="/history">
                                    <a className={`navbar-link ${router.pathname == "/history" ? "active" : ""}`}>
                                    <div className='navbar-icon'><History_icon /></div>
                                    <div className='navbar-title'>History</div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='bottomsection'>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>
                                <Link href="/settings">
                                    <a className={`navbar-link ${router.pathname == "/settings" ? "active" : ""}`}>
                                    <div className='navbar-icon'><Settings_icon /></div>
                                    <div className='navbar-title'>Settings</div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
    }