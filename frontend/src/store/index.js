import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;