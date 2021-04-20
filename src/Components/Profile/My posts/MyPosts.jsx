import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi how are you?", likeCounts: 10},
        {id: 2, message: "It's my my first post", likeCounts: 12},
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post meassage={postData[0].message} like={postData[0].likeCounts}/>
                <Post meassage={postData[1].message} like={postData[1].likeCounts}/>
            </div>
        </div>
    )
}
export default MyPosts;