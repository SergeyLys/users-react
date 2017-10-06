import { combineReducers } from 'redux';
import user from './user';
import tasks from './tasks';
import search from './search';

export default combineReducers({
    user,
    tasks,
    search
});