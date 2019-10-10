import * as types from "./actionTypes";

const initialPlaylist = [];

export default function reducer(state = initialPlaylist, action) {
    switch(action.type) {
        case types.FETCH_CONTENT:
            return state.concat(action.payload)

        default: 
            return state;
    }
}