import {rerenderTree} from "../../render";

let state = {
    profilePage: {
        post: [{id: 1, message: "Hi how are you?", likeCounts: 10},
            {id: 2, message: "It's my my first post", likeCounts: 12},
            {id: 2, message: "learning", likeCounts: 11},],
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
    },
    sidebar: {
        frendsName: [
            {id: 1, fname: "Sveta"},
            {id: 2, fname: "Nick"},
            {id: 3, fname: "Slava"},],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCounts: 0,
    }
    state.profilePage.post.push(newPost);
    rerenderTree(state);
}

export default state;