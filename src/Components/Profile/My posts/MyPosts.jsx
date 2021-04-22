import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => (<Post meassage={p.message} like={p.likeCounts}/>));
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea placeholder="Write somethings" ></textarea>
                </div>
                <div>
                    <button className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;