import React from "react";
import s_news from "./News.module.css";
import SomeNews from "./SomeNews";
const News = (props) => {
    return (
        <div>
            <h1 align="center">News</h1>
            <div className={s_news.AllNews}>
                {props.SomeNews}
            </div>
        </div>
    )
}
export default News;