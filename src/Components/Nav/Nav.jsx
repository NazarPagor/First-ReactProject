import React from "react";
import classe from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import s from "./FriendsSidebar/FriendsSidebar.module.css";

const Nav = (props) => {

    let Frends = props.state.sidebar.frendsName.map(  (f) => (<FriendsSidebar name = {f.fname} id = {f.id}/>));
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
            <div className={s.sidebar}>
                <h2>Friends</h2>
                <div className={s.frends}>
                    {Frends}
                </div>
            </div>

        </nav>
    )
}
export default Nav;