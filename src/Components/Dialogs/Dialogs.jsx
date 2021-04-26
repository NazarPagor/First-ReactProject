import React from "react";
import s_dialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Meassage from "./Message/Meassage";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElement = props.state.meassages.map((m) => (<Meassage message={m.message}/>));

    let newMessage = React.createRef();
    let SendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s_dialog.dialogs}>
            <div className={s_dialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s_dialog.messages}>
                {messagesElement}
                <div className={s_dialog.sendForm}>
                    <textarea  ref={newMessage} className={s_dialog.textArea} ></textarea>
                    <div><button  onClick={ SendMessage } className={s_dialog.sendButton}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;