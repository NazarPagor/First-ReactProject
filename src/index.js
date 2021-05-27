import React from 'react';
import store from "./Components/redux/redux-store";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from "./Components/redux/StoreContext";
export let rerenderTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
