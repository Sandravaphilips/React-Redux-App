import React from "react";

export default function Playlist(props) {
    return (
        <div>
            <img src={props.playlist.img} />
            <section>
                <p>Name: {props.playlist.name}</p>
                <p>Number of plays: {props.playlist.nbP} </p>
            </section>
        </div>
    )
}