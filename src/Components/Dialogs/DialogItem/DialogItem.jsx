import React from "react";
import s_dialog from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/message/" + props.id
    return (
        <div className={s_dialog.dialog + ' ' + s_dialog.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;