import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './consfigureStore';
import Root from './components/Root';

const store = configureStore();
console.log(store.getState())
render(
        <Root store={store} />,
    document.getElementById("app")
);


