import React from "react";
import Song from "./Song/Song";

const Music = (props) => {
    let state = props.musicPage
    let newSong = state.newSong.map( (s) => (<Song song ={s.song} key ={s.id}/>) )
    return (
        <div>
            {newSong}
        </div>
    )
}
export default Music;