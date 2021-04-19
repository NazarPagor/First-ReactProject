import React from "react";
import classe from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={classe.nav}>
            <ul>
                <a href="/profile">
                    <li className={`${classe.link} ${classe.activ}`}>Profile</li>
                </a>
                <a href="/message">
                    <li className={classe.link}>Meseage</li>
                </a>
                <a href="/news">
                    <li className={classe.link}>News</li>
                </a>
                <a href="/music">
                    <li className={classe.link}>Music</li>
                </a>
            </ul>
        </nav>
    )
}
export default Nav;