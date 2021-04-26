import React from "react";
import {NavLink} from "react-router-dom";
import s from "./FriendsSidebar.module.css";



const FriendsSidebar = (props) => {
    let path = "/friends/" + props.id
    return (
        <div>
            <NavLink to={path}>
                <div className={s.frendPos}>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" alt="foto" className={s.frendFoto}/>
                    <div className={s.frendsName}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default FriendsSidebar;