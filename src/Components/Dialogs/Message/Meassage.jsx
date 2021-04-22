import React from "react";
import s_dialog from "./../Dialogs.module.css";


const Meassage = (props) => {
    return <div className={s_dialog.message}>{props.message}</div>
}
export default Meassage;