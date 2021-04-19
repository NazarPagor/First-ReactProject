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


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/message" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
