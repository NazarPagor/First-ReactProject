import React from "react";
import s_news from "./News.module.css";
import SomeNews from "./SomeNews";
import StoreContext from "../redux/StoreContext";
import News from "./News";

const NewsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().newsPage;
                let someNews = state.someNews.map((n) => (<SomeNews news={n.news}/>))
                return (
                    <div>
                        <News SomeNews = {someNews}/>
                    </div>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default NewsContainer;