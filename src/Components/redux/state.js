

let rerenderTree = () => {
    console.log("Changed");
}

let state = {
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
    },
    sidebar: {
        frendsName: [
            {id: 1, fname: "Sveta"},
            {id: 2, fname: "Nick"},
            {id: 3, fname: "Slava"},],
    },
}

export const newPostMesage = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounts: 0,
    }
    state.profilePage.post.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}


export const subscribe = (observer) =>{
    rerenderTree = observer;
}

window.state = state;

export default state;