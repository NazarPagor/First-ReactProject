import React from 'react';
import state, {subscribe} from "./Components/redux/state";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, newPostMesage} from "./Components/redux/state";

export let rerenderTree = () => {
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

rerenderTree(state);

subscribe(rerenderTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
