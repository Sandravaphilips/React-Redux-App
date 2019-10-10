import * as types from "./actionTypes";

const initialPlaylist = {
    playlist: []
};

export default function reducer(state = initialPlaylist, action) {
    switch(action.type) {
        case types.FETCH_CONTENT:
            return {...state, playlist: [action.payload.user, ...action.payload.follower]}

        default: 
            return state;
    }
}