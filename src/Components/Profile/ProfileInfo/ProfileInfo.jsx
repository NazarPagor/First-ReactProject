import React from "react";
import  style_ProfInfo from "./Profileinfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="mainFoto" className="main_foto"/>
            </div>
            <div className={style_ProfInfo.decriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}
export default ProfileInfo;