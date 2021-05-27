import React from "react";
import Song from "./Song/Song";
import StoreContext from "../redux/StoreContext";
import Music from "./Music";

const MusicContainer = (props) => {
    debugger;
    return (
        <StoreContext.Consumer>{
            (store) => {
                let newSong = store.getState().musicPage.newSong.map( (s) => (<Song song ={s.song}/>) )
                return (
                    <Music NewSong = {newSong} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default MusicContainer;