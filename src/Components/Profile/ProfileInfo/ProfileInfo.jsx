import React from "react";
import style_ProfInfo from "./Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://izabotin.ru/wp-content/uploads/2019/09/panorama-kyiv-3.jpg"
                    alt="mainFoto" className={style_ProfInfo.mainFoto}/>
            </div>
            <div className={style_ProfInfo.decriptionBlock}>
                <div className={style_ProfInfo.description}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQ8dQ-LMiMmTEyBijR0FzpQHC7tH6qTE2g&usqp=CAU" alt="foto"
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