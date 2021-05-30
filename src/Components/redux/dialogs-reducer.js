const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

let initialState = {
    meassages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 6, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    dialogs: [
        {id: 1, name: "Nazar"},
        {id: 2, name: "Andrev"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Vova"},
        {id: 5, name: "Dima"},
        {id: 6, name: "Valera"},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case updateNewMessageBody:
            return {
                ...state,
                newMessageBody: action.body
            }
        case sendMessage:
            let body = state.newMessageBody;
            return {
                ...state,
                meassages: [...state.meassages, ({id: 6, message: body})],
                newMessageBody: '',
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: sendMessage})
export const updateNewPostMessageCreator = (body) =>
    ({type: updateNewMessageBody, body: body})


export default dialogsReducer;