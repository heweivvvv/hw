import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {reducers as rootReducer} from './views/reducer_combine';
import {rootSaga} from './views/saga';

export default function configureStore(preloadedState) {

    // 创建saga中间件
    const sagaMiddleware = createSagaMiddleWare();
    const middleWares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleWares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    // 创建存储容器
    const store = createStore(rootReducer, preloadedState, composedEnhancers);
    sagaMiddleware.run(rootSaga);

    return store;

}
