import React from "react";
import UserComponent from "./Playlist";

export default function Playlists(props) {
    return (
        <div>
            {
                props.playlists.map(playlist =>
                    <UserComponent key={playlist.id} user={playlist} />
                )
            }
        </div>
    )
}