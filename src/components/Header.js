import Router from "next/router";
import User_icon from "../icons/user_icon.js";
import Notifications_icon from "../icons/notifications_icon.js";
import { API_URL } from "../config/index";
import useStore from "../stores/userStore.js";
import { useEffect, useRef, useState } from "react";


export default function Header({ heading }) {
    const logout = useStore((state) => state.logout);
    const [open, setOpen] = useState(false)
    const dropdown = useRef(null)

    useEffect(() => {
        let handler = (event) => {
            if(!dropdown.current.contains(event.target)){
                setOpen(false)
                console.log("click")
            }
        }
        document.addEventListener('mousedown',handler)

        return () => {
            document.removeEventListener('mousedown',handler)
        }
    })

    async function Logout(event) {
        const response = await fetch(`${API_URL}/api/account/logout/`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
        });

        if (response.ok) {
            console.log("logged out");
            logout();
            Router.push("/login");
        }
    }


    function HeaderNav (props) {
        return (
            <nav ref={dropdown} className="header-nav">
                <ul className="header-nav-list">{props.children}</ul>
            </nav>
        )
    }

    function HeaderNavItem (props) {
        return (
            <li className="header-nav-item">
                <a href="#" className="header-icon" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>

                {open && props.children}
            </li>
        )
    }

    function DropDownMenu (props) {
        return (
            <div className="dropdown">
                {props.children}
            </div>
        )
    }

    function DropDownItem (props) {
        return (
            <a href="#" className="drop-menu-item" onClick={props.onClick}>
                <span className="icon">{props.icon}</span>
                {props.children}
            </a>
        )
    }

    return (
        <header className="header">
            <h1 className="page-title">{heading}</h1>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <button className="header-icon"><User_icon /></button>
                        <ul className="dropdown-menu">
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </li>
                    <li className="header-nav-item">
                        <button className="header-icon"><Notifications_icon /></button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
