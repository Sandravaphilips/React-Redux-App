import * as types from "./actionTypes";

const initialState = {
    users: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_CONTENT:
            return {...state, users: [action.payload.user, ...action.payload.follower]}

        default: 
            return state;
    }
}