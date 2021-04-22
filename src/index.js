import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi how are you?", likeCounts: 10},
    {id: 2, message: "It's my my first post", likeCounts: 12},
    {id: 2, message: "learning", likeCounts: 11},
]
let dialogs = [
    {id: 1, name: "Nazar"},
    {id: 2, name: "Andrev"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Vova"},
    {id: 5, name: "Dima"},
    {id: 6, name: "Valera"},
]
let meassages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 6, message: "Yo"},
    {id: 5, message: "Yo"},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs={dialogs} meassages={meassages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
