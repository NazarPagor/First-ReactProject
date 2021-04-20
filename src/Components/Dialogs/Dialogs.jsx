import React from "react";
import s_dialog from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/message/" + props.id
    return (
        <div className={s_dialog.dialog + ' ' + s_dialog.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s_dialog.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Nazar"},
        {id: 2, name: "Andrev"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Vova"},
        {id: 5, name: "Dima"},
        {id: 6, name: "Valera"},
    ]

    let meassagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 6, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    return (
        <div className={s_dialog.dialogs}>
            <div className={s_dialog.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s_dialog.messages}>
                <Message message={meassagesData[0].message}/>
                <Message message={meassagesData[1].message}/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}
export default Dialogs;