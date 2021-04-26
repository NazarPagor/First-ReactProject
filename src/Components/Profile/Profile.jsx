import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.state.post} addPost={props.addPost} />
        </div>
    )
}
export default Profile;