import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, newPostMesage} from "./Components/redux/state";

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 newPostMesage = {newPostMesage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
