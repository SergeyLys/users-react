import axios from 'axios';

export function taskCreate(data, token) {
    return dispatch => {
        return axios.post('/api/task-create', data, { headers: { Authorization: token }})
            .then(response => {
                dispatch({type: 'TASK_ADD', payload: response.data});
            }).catch(err => console.log(err.response));
    }
}

export function taskGetall(token) {
    return dispatch => {
        return axios.post('/api/task-create', { headers: { Authorization: token }})
            .then(response => {
                dispatch({type: 'TASK_FETCH', payload: response.data});
            }).catch(err => console.log(err.response));
    }
}