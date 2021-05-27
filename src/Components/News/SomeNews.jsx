import React from "react";
import s_news from "./News.module.css";


const SomeNews = (props) => {
    return (
        <div>
            {props.news}
        </div>
    )
}
export default SomeNews;