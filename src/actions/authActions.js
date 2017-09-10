import axios from 'axios';

export function currentUserRequest(token) {
    return dispatch => {
        if (token)
            return axios.get('/api/current-user', { headers: { Authorization: token }})
                .then((response) => {
                    dispatch({type: 'USER_LOGGED_IN', payload: response.data});
                });
    }
}

export function signupRequest(data) {
    return dispatch => {
        return axios.post('/api/signup', data);
    }
}

export function signinRequest(data) {
    return dispatch => {
        return axios.post('/api/signin', data);
    }
}

export function signOut() {
    return dispatch => { return dispatch({type: 'USER_LOGOUT'}) };
}