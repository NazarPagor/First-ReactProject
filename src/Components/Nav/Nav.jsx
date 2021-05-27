import React from "react";
import classe from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import s from "./FriendsSidebar/FriendsSidebar.module.css";


const Nav = (props) => {
    return (
        <nav className={classe.nav}>
            <ul>
                <NavLink to="/profile" activeClassName={classe.activeLink}>
                    <li className={`${classe.link} ${classe.activ}`}>
                        <div className={classe.titleLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fill-rule="evenodd"
                                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                            <div className={classe.text}>
                                Profile
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to="/message" activeClassName={classe.activeLink}>
                    <li className={classe.link}>
                        <div className={classe.titleLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                 className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                            </svg>
                            <div className={classe.text}>Message</div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to="/news" activeClassName={classe.activeLink}>
                    <li className={classe.link}>
                        <div className={classe.titleLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-newspaper" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                                <path
                                    d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                            </svg>
                            <div className={classe.text}>
                                News
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to="/music" activeClassName={classe.activeLink}>
                    <li className={classe.link}>
                        <div className={classe.titleLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-music-note-list" viewBox="0 0 16 16">
                                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                                <path fill-rule="evenodd"
                                      d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <div className={classe.text}>
                                Music
                            </div>
                        </div>
                    </li>
                </NavLink>
            </ul>
            <hr className={classe.Hr}/>
            <div className={s.sidebar}>
                <h2>Friends</h2>
                <div className={s.frends}>
                    {props.Frends}
                </div>
            </div>

        </nav>
    );
}
export default Nav;