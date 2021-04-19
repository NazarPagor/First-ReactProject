import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Pemove</button>
            </div>
            <div>
                <Post meassage="Hi how are you?" like="17"/>
                <Post meassage="It's my my first post" like="25"/>
            </div>
        </div>
    )
}
export default MyPosts;