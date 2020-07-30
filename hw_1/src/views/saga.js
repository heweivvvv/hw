import {put, takeEvery} from 'redux-saga/effects';

export function * rootSaga() {

    yield takeEvery('WATCH_USERNAME', changeUserName)

}

export function * changeUserName() {

    yield  put({type: 'CHANGE_USERNAME', payload: {userName: 1231}});

}
