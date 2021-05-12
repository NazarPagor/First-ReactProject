import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.profilePage.post}
                     newPostText = {props.profilePage.newPostText}
                     dispatch = {props.dispatch}
            />
        </div>
    )
}
export default Profile;