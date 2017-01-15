import { combineReducers } from 'redux';
import users from './usersReducer';
import news from './newsReducer';


const rootReducer = combineReducers({
    users: users,
    news: news
})

export default rootReducer;