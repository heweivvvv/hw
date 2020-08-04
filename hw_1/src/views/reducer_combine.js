import {combineReducers} from 'redux';
import {reducers as loginReducer} from './login/reducer.js';
import {reducers as homeReducer} from './home/reducer.js';

export const reducers = {
    login: combineReducers(loginReducer),
    home: combineReducers(homeReducer)
};
