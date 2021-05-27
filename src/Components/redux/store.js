import profileReducer from "../redux/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";






let store = {
   /* _state: {
        profilePage: {
            post: [{id: 1, message: "Hi how are you?", likeCounts: 10},
                {id: 2, message: "It's my my first post", likeCounts: 12},
                {id: 2, message: "learning", likeCounts: 11},],
            newPostText: 'new text',
        },
        meassagesPage: {
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
        },
        sidebar: {
            frendsName: [
                {id: 1, fname: "Sveta"},
                {id: 2, fname: "Nick"},
                {id: 3, fname: "Slava"},],
        },
    },*/
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("Changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.meassagesPage = dialogsReducer(this._state.meassagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.news = newsReducer(this._state.news, action);
        this._state.music = musicReducer(this._state.music, action);
        this._callSubscriber(this._state);
    }
}



window.state = store;
export default store;