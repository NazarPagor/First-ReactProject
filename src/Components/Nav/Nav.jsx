import React from "react";
import classe from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classe.nav}>
            <ul>
                <NavLink to="/profile" activeClassName={classe.activeLink}>
                    <li className={`${classe.link} ${classe.activ}`}>Profile</li>
                </NavLink>
                <NavLink to="/message" activeClassName={classe.activeLink}>
                    <li className={classe.link}>Meseage</li>
                </NavLink>
                <NavLink to="/news" activeClassName={classe.activeLink}>
                    <li className={classe.link}>News</li>
                </NavLink>
                <NavLink to="/music" activeClassName={classe.activeLink}>
                    <li className={classe.link}>Music</li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Nav;