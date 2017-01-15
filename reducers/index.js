import { combineReducers } from 'redux';
import users from './usersReducer';
import news from './newsReducer';
import sportNews from './sportNewsReducer';


const rootReducer = combineReducers({ users, news, sportNews});

export default rootReducer;