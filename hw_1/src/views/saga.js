import {takeEvery, put, select, call} from 'redux-saga/effects';
import {buildCheckCode} from "../utils/util";
import {ActionTypes} from "./login/config";
import {ActionTypes as HomeActionTypes} from "./home/config";
import {ActionTypes as DetailActionTypes} from "./detail/config";
import service from '../service/helper'
import Cookies from 'js-cookie'
import {browserHistory} from '../history';
import {
    addRecord,
    getConsumeRecords,
    getConsumeTypeList,
    getPayTypeList,
    modifyRecord,
    deleteRecordAPI
} from "../service/home";
import {getOneRecord} from "../service/detial";
import {checkRecord} from '../views/detail/helper';

export function* rootSaga() {

    yield takeEvery('LOGIN', userLogin);
    yield takeEvery('GETRECORDSLIST', getRecordsList);
    yield takeEvery('DETAIL_INIT', detailInit);
    yield takeEvery('SAVE_RECORD', saveRecord);
    yield takeEvery('DELETERECORD', deleteRecord);
    yield takeEvery('LOGOUT', userLogout);

}

function* userLogin() {
    try {
        const stateObj = yield select();
        const {userName, password, checkCodeText, checkCode} = stateObj.login;
        const params = {
            loginName: userName,
            password: password
        };
        if (!params.loginName) {
            alert('请输入用户名');
            return;
        }
        if (!params.password) {
            alert('请输入密码');
            return;
        }
        if (checkCodeText.toUpperCase() !== checkCode.toUpperCase()) {
            alert('验证码错误');
            yield put({
                type: ActionTypes.changeCheckCodeText, payload: {
                    checkCodeText: buildCheckCode()
                }
            });
            return;
        }

        let {user, msg, result} = yield call(service, '/signin', params, 'POST');
        if (result) {
            sessionStorage.setItem("isLogin", "1");
            sessionStorage.setItem("userName", user.userName);
            Cookies.set('userId', user.userId);
            browserHistory.push('/home');
            yield put({type: ActionTypes.setUserInfo, payload: {userInfo: user}});
        } else {
            alert(msg);
        }
    } catch (e) {
        console.log(e);
    }
}

/**
 * @desc 无权限处理
 */
function noAuthorized() {
    sessionStorage.setItem("isLogin", "");
    sessionStorage.setItem("userName", "");
    Cookies.set('userId', '');
    browserHistory.push('/');
}

function* userLogout() {
    let {msg, result} = yield call(service, '/signout', {}, 'POST');
    if (result) {
        noAuthorized();
        yield put({type: ActionTypes.setUserInfo, payload: {userInfo: {}}});
        browserHistory.push('/');
    } else {
        alert(msg)
    }
}

function* getRecordsList() {
    const {msg, records, result, code} = yield call(getConsumeRecords);
    if (result) {
        yield put({type: HomeActionTypes.updateRecordList, payload: {recordsList: records}});
    } else {
        alert(msg);
        if (code === '0001') {
            noAuthorized();
        }
    }
}

function* detailInit(action) {
    try {
        let payload;
        const id = action.payload.id || '';
        const consumeTypes = yield call(getConsumeTypeList);
        const payTypes = yield call(getPayTypeList);

        payload = Object.assign({}, {
            id,
            editing: true,
            consumeTypes,
            payTypes,
            consumeTypeId: consumeTypes[0] ? consumeTypes[0].typeId : '',
            payTypeId: payTypes[0] ? payTypes[0].typeId : '',
            title: '',
            consumeData: '',
            count: 0,
            remark: ''
        });


        if (id) {
            const {record, result, msg} = yield call(getOneRecord, {id});
            if (result && record) {
                payload = {...payload, ...record, editing: false};
            } else {
                alert(msg);
            }
        }
        yield put({type: DetailActionTypes.initRecord, payload});
    } catch (e) {
        console.log(e);
    }
}

function* saveRecord() {
    try {
        const stateObj = yield select();
        const {id, title, consumeTypeId, payTypeId, consumeData, count, remark} = stateObj.detail;
        const record = {title, consumeTypeId, payTypeId, consumeData, count, remark};
        console.log(record);
        const params = id ? [modifyRecord, record, id] : [addRecord, record];
        if (checkRecord(record)) {
            const {result, msg} = yield call(...params);
            if (result) {
                browserHistory.push('/home');
            } else {
                alert(msg);
            }
        } else {
            alert('输入不合法，请检查!');
        }
    } catch (e) {
        console.log(e);
    }

}

function* deleteRecord(action) {
    try {
        let id = action.payload.id;
        if (id) {
            const {result, records, msg} = yield call(deleteRecordAPI, id);
            if (result) {
                yield put({type: HomeActionTypes.updateRecordList, payload: {recordsList: records || []}});
            } else {
                alert(msg || '删除失败');
            }
        }
    } catch (e) {
        alert(e || '删除失败');
    }
}
