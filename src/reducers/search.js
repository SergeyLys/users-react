export default (state = {searchResult: {}}, action = {}) => {
    switch (action.type) {

        case 'FETCH_SEARCH': {
            return {
                ...state,
                searchResult: action.payload
            };
        }

        default: return state;
    }
}