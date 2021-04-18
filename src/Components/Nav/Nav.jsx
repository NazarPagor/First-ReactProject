import React from "react";
import classe from "./Nav.module.css";
const Nav = () => {
    return (
        <nav className={classe.nav}>
            <ul>
                <li className={classe.link}>Profile</li>
                <li className={classe.link}>Profile</li>
                <li className={classe.link}>Meseage</li>
                <li className={classe.link}>News</li>
                <li className={classe.link}>Music</li>
            </ul>
        </nav>
    )
}
export default Nav;