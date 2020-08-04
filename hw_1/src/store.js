import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {reducers} from './views/reducer_combine';
import {rootSaga} from './views/saga';


// 创建saga中间件
const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];

window.store = createStore(combineReducers(reducers), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
