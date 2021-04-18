import React from "react";
import  s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="mainFoto" className="main_foto"/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                <div>
                    New posts
                </div>
                <div>
                    my post
                    <div className={s.link}>
                        post 0
                    </div>
                    <div className={s.link}>
                        post1
                    </div>
                    <div className={s.link}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;