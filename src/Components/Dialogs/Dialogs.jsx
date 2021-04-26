import React from "react";
import s_dialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Meassage from "./Message/Meassage";
const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElement = props.state.meassages.map((m) => (<Meassage message={m.message}/>));
    return (
        <div className={s_dialog.dialogs}>
            <div className={s_dialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s_dialog.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;