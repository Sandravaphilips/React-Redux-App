import * as types from "./actionTypes";
import axios from 'axios';

function fetchContent(playlist) {
    return {type: types.FETCH_CONTENT, payload: playlist}
}

const renderContent = () => dispatch => {
    axios.get('https://openwhyd.org/adrien?format=json')
    .then(response => {
        dispatch(fetchContent(response.data))
    })
}

export default renderContent;