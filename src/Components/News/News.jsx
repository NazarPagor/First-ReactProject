import React from "react";
import s_news from "./News.module.css";
import SomeNews from "./SomeNews";
const News = (props) => {
    let SNews = props.store.newsPage.someNews.map((n) => (<SomeNews news = {n.news}/>))
    return (
        <div>
            <h1 align="center">News</h1>
            <div className={s_news.AllNews}>
                {SNews}
            </div>
        </div>
    )
}
export default News;