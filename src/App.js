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

let posts = [
    {id: 1, message: "Hi how are you?", likeCounts: 10},
    {id: 2, message: "It's my my first post", likeCounts: 12},
    {id: 2, message: "learning", likeCounts: 11},
]

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ () =>  <Profile posts={props.posts} /> }/>
                    <Route path="/message" render={ () =>  <Dialogs dialogs = {props.dialogs} meassages={props.meassages} /> }/>
                    <Route path="/news" render={ () =>  <News/> }/>
                    <Route path="/music" render={ () =>  <Music/> }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
