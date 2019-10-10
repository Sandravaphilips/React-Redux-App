import React from "react";
import styled from "styled-components";

const UserStyle = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;

  img{
    width: 150px;
    height: 150px;
    border-radius: 3px;
    margin-right: 20px;
  }
`
export default function UserComponent({user}) {
  const {avatar_url, login, followers_url, following_url, url} = user;

  return (
    <UserStyle>
      <img src={avatar_url} alt='follower-avatar' />
      <div>
        <h3>{login}</h3>
        <p>Profile: <a href={url}>Click here</a>
        </p>
        <p>Followers: <a href={followers_url}>Click here</a></p>
        <p>Following: <a href={following_url}>Click here</a></p>
      </div>
    </UserStyle>
  )
}