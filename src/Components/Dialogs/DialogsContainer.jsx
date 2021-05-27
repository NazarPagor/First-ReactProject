import React from "react";
import {sendMessageCreator, updateNewPostMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = (event) => {
        props.store.dispatch(sendMessageCreator());
    }


    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewPostMessageCreator(body));

    }
    return (
        <Dialogs
            updateNewMessageBody = {onNewMessageChange}
            sendMessage = {onSendMessageClick}
            dialogsPage = {state}
        />
    )
}
export default DialogsContainer;