import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavContainer from "./Components/Nav/NavContainer";
import NewsContainer from "./Components/News/NewsContainer";
import MusicContainer from "./Components/Music/MusicContainer";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile />}/>
                    <Route path="/message" render={() =>
                        <DialogsContainer />}/>
                    <Route path="/news" render={() =>
                        <NewsContainer /> }/>
                    <Route path="/music" render={() =>
                        <MusicContainer />}/>
                </div>
            </div>
    )
}

export default App;
