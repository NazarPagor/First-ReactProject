import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.descriptionPost}>
                <div className={s.miniProf}>
                    <img className={s.PostMainFoto} src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"/>
                    <div className={s.miniProfName}>
                        Nazar
                    </div>
                </div>
                <div className={s.PostMessage}>
                    {props.message}
                </div>
                <div>
                    <span className={s.like}> <img src="https://e7.pngegg.com/pngimages/975/34/png-clipart-blue-drawing-pin-computer-icons-bulletin-board-like-blue-angle.png"/>
                        <div className={s.likeCounter}>
                            {props.like}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Post;