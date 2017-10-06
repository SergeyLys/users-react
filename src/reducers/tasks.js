export default (state = {tasks: []}, action = {}) => {
    switch (action.type) {
        case 'TASK_ADD': {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        }

        case 'TASK_FETCH': {
            return {
                ...state,
                tasks: action.payload
            };
        }

        default: return state;
    }
}