import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => (<Post message={p.message} key = {p.id} like={p.likeCounts}/>));
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea className={s.inputText} onChange={onPostChange} ref={newPostElement} placeholder="Write something" value={props.newPostText}></textarea>
                </div>
                <div className={s.buttonBlock}>
                    <button onClick={onAddPost} className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;