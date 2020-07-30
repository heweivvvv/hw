import {combineReducers} from 'redux';
import * as loginReducer from './login/reducer.js';

export const reducers = combineReducers({
    login: loginReducer
})
