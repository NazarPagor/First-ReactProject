import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile store = {props.store}
                        />}/>
                    <Route path="/message" render={() =>
                        <DialogsContainer store={props.store}
                        />}
                    />
                    <Route path="/news" render={() =>
                        <News store = {props.state}/> }/>
                    <Route path="/music" render={() =>
                        <Music store = {props.state} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
