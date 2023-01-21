import Dashboard_icon from '../../icons/dashboard_icon'
import History_icon from '../../icons/history_icon'
import Practice_icon from '../../icons/practice_icon'
import Settings_icon from '../../icons/settings_icon'

import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Navbar() {

    const router = useRouter();

    return (
        <aside className='side'>
            <div className='dummy'></div>
            <div className='navbar-parent'>
                <div className='navbar'>
                    <div className='topsection'>
                        <div className='logo'>
                            <Image src='/Ilim.svg' alt='' width="100" height="100"></Image>
                        </div>
                    </div>
                    <div className='middlesection'>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>
                                <Link href="/" className={`navbar-link ${router.pathname == "/" ? "active" : ""}`}>
                                        <div className='navbar-icon'><Dashboard_icon /></div>
                                        <div className='navbar-title'>Dashboard</div>
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link href="/practice/math" className={`navbar-link ${router.pathname.startsWith("/practice") ? "active" : ""}`}>
                                    <div className='navbar-icon'><Practice_icon /></div>
                                    <div className='navbar-title'>Practice</div>
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link href="/history" className={`navbar-link ${router.pathname == "/history" ? "active" : ""}`}>
                                    <div className='navbar-icon'><History_icon /></div>
                                    <div className='navbar-title'>History</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='bottomsection'>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>
                                <Link href="/settings" className={`navbar-link ${router.pathname == "/settings" ? "active" : ""}`}>
                                    <div className='navbar-icon'><Settings_icon /></div>
                                    <div className='navbar-title'>Settings</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
    }