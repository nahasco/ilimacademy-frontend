import User_icon from "../../icons/user_icon.js";
import DropMenu from "../AccountMenuItem.js";


export default function Header({ heading }) {

    // useEffect(() => {
    //     let handler = (event) => {
    //         if(!dropdown.current.contains(event.target)){
    //             setOpen(false)
    //             console.log("click")
    //         }
    //     }
    //     document.addEventListener('mousedown',handler)

    //     return () => {
    //         document.removeEventListener('mousedown',handler)
    //     }
    // })

    return (
        <header className="header">
            <h1 className="page-title">{heading}</h1>
            <nav className="header-nav">
                {/* <ul className="header-nav-list">
                    <li ref={dropdown} className="header-nav-item">
                        <button onClick={() => setOpen(!open)} className="header-icon"><User_icon /></button>
                        <ul className="dropdown-menu">
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </li>
                </ul> */}
                <DropMenu icon={<User_icon/>}></DropMenu>
            </nav>
        </header>
    );
}