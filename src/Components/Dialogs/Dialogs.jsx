import React from "react";
import s_dialog from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Meassage from "./Message/Meassage";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElement = state.meassages.map((m) => (<Meassage message={m.message}/>));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = (event) => {
        props.sendMessage();
    }


    let onNewMessageChange = (event) =>{
        let body = event.currentTarget.value;
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s_dialog.dialogs}>
            <div className={s_dialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s_dialog.messages}>
                <div>{messagesElement}</div>
                <div className={s_dialog.sendForm}>
                        <textarea placeholder='Enter message'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  className={s_dialog.textArea}  >

                        </textarea>
                    <div>
                        <button onClick={onSendMessageClick} className={s_dialog.sendButton}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;