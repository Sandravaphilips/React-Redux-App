import React from "react";
import Playlist from "./Playlist";

export default function Playlists(props) {
    return (
        <div>
            {
                props.playlists.map(playlist => {
                    <Playlist playlist={playlist} />
                })
            }
        </div>
    )
}