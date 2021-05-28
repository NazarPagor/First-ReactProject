import React from "react";
import {sendMessageCreator, updateNewPostMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainerr = (props) => {

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
}*/
debugger;
const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewPostMessageCreator(body));
        },
        sendMessage: (body) =>{
            dispatch(sendMessageCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;