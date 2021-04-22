import React from "react";
import style_ProfInfo from "./Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="mainFoto" className={style_ProfInfo.mainFoto}/>
            </div>
            <div className={style_ProfInfo.decriptionBlock}>
                <div className={style_ProfInfo.description}>
                    <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="foto"
                         className={style_ProfInfo.userFoto}/>
                    <div className={style_ProfInfo.userName}>
                        <h2>Nazar</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;