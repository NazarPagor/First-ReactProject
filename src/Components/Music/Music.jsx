import React from "react";
import s_dialog from "./Music.module.css";
import Song from "./Song/Song";

const Music = (props) => {
     let NewSong = props.store.musicPage.newSong.map( (s) => (<Song song ={s.song}/>) )
    return (
        <div>
            {NewSong}
        </div>
    )
}
export default Music;