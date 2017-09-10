import axios from 'axios';

export function getAllUsers(token) {
    return dispatch => {
        return axios.get('/api/user-list', { headers: { Authorization: token }})
            .then(res => {
                dispatch({type: 'FETCH_USERS', payload: res.data});
            });
    }
}

export function banUserRequest(id, token) {
     return dispatch => {
        return axios.put(`/api/user-banned`, {_id: id}, { headers: { Authorization: token }})
            .then(response => {
                dispatch({type: 'USER_BANNED', payload: response.data});
            });
    }
}

export function changeProfileRequest(data, token) {
    return dispatch => {
        return axios.put('/api/change-info', data, { headers: { Authorization: token }})
            .then(response => {
                dispatch({type: 'USER_CHANGED', payload: response.data});
            });
    }
}

export function uploadImage(data, token) {
    return dispatch => {
        return axios.post('/api/submit-image', data, { headers: { Authorization: token }})
            .then(response => {
                dispatch({type: 'USER_CHANGED', payload: response.data});
            }).catch(err => console.log(err.response));
    }
}