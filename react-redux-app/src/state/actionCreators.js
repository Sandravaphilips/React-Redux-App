import * as types from "./actionTypes";
import axios from 'axios';



export function fetchContent(user, follower) {
    return {type: types.FETCH_CONTENT, payload: {user: user, follower: follower}}
}

export const renderContent = () => dispatch => {
    const followersApiResponse = axios.get('https://api.github.com/users/Sandravaphilips/followers');
    const userApiResponse = axios.get('https://api.github.com/users/Sandravaphilips')

    Promise.all([userApiResponse, followersApiResponse])
    .then(([userResponse, followersResponse]) => {
        dispatch(fetchContent(userResponse.data, followersResponse.data))
    })
    .catch(err=> console.log(err))
}

