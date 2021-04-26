import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state = {props.state}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ () =>  <Profile state = {props.state.profilePage} addPost={props.addPost} /> }/>
                    <Route path="/message" render={ () =>  <Dialogs state = {props.state.meassagesPage} /> }/>
                    <Route path="/news" render={ () =>  <News/> }/>
                    <Route path="/music" render={ () =>  <Music/> }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
