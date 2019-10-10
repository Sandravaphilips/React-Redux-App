import React from 'react';
import styled from "styled-components";

const NavigationStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: black;

        &:hover {
            color: blueviolet;
        }
    }
`

export default function Navigation() {
    return (
        <NavigationStyle>
            <a href='index.html'>Home</a>
            <a href='index.html'>Services</a>
            <a href='index.html'>Contact</a>
            <a href='index.html'>Create your Playlist</a>
        </NavigationStyle>
        
    )
}