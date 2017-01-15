import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Users from './users_components/Users';
import News from './news_components/News';
import AddNewsForm from './news_components/AddNewsForm';

const Root = ({ store }) => (
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path='/' component={HomePage} />
            <Route path='users' component={Users} />
            <Route path='news' component={News} />
            <Route path='addnews' component={AddNewsForm} />
        </Router>
    </Provider>
);   
export default Root;