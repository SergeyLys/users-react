const initialState = {
    user: '',
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                user: action.payload
            };

        case 'USER_LOGOUT':
            return {
                user: ''
            };

        case 'USER_CHANGED':
            return {
                ...state,
                user: action.payload
            };

        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            };
        
        case 'USER_BANNED': {
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id 
                    ? { ...user, banned: action.payload.banned } 
                    : user
                ) 
            };
        }

        default: return state;
    }
}