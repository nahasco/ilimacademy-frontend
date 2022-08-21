import User_icon from "../../icons/user_icon.js";
import DropMenu from "../AccountMenuItem.js";


export default function HeaderMain({ heading }) {

    return (
        <header className="header">
            <h1 className="page-title">{heading}</h1>
            <nav className="header-nav">
                <DropMenu icon={<User_icon/>}></DropMenu>
            </nav>
        </header>
    );
}