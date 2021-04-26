import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => (<Post message={p.message} like={p.likeCounts}/>));
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> a</textarea>
                </div>
                <div>
                    <button onClick={addPost} className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;