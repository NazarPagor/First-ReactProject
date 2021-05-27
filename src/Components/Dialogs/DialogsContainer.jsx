import React from "react";
import {sendMessageCreator, updateNewPostMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../redux/StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = (event) => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewPostMessageCreator(body));

                }
                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;