import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise-middleware';
import { loadState, saveState } from './loadState';

const configureStore = () => {
    const persistedState = loadState();
    let logger = createLogger();

    const store = createStore(
        rootReducer,
       // persistedState,
    applyMiddleware(promise(), logger)
    );

    store.subscribe(() => {
        saveState(store.getState())
    })

    return store;
}

export default configureStore;