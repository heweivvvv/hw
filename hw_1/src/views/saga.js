import {takeEvery, put, select, call} from 'redux-saga/effects';
import {buildCheckCode} from "../utils/util";
import {ActionTypes} from "./login/config";
import {ActionTypes as HomeActionTypes} from "./home/config";
import {ActionTypes as DetailActionTypes} from "./detail/config";
import service from '../service/helper'
import Cookies from 'js-cookie'
import {browserHistory} from '../history';
import {getConsumeRecords, getConsumeTypeList, getPayTypeList} from "../service/home";
import {getOneRecord} from "../service/detial";

export function* rootSaga() {

    yield takeEvery('LOGIN', userLogin);
    yield takeEvery('GETRECORDSLIST', getRecordsList);
    yield takeEvery('DETAIL_INIT', detailInit)

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
            Cookies.set('userId', user.userId);
            browserHistory.push('/home');
        } else {
            alert(msg);
        }
    } catch (e) {
        console.log(e);
    }
}

function* getRecordsList() {
    const {msg, records, result} = yield call(getConsumeRecords);
    if (result) {
        yield put({type: HomeActionTypes.updateRecordList, payload: {recordsList: records}});
    } else {
        alert(msg);
    }
}

function* detailInit(action) {
    try {
        let payload;
        const {id} = action.payload;
        const consumeTypes = yield call(getConsumeTypeList);
        const payTypes = yield call(getPayTypeList);

        if (consumeTypes[0] && payTypes[0]) {
            payload = Object.assign({}, {
                id,
                consumeTypes,
                payTypes,
                consumeTypeId: consumeTypes[0].typeId,
                payTypeId: payTypes[0].typeId
            });
        }
        if (id) {
            const {record, result, msg} = yield call(getOneRecord, {id});
            if (result && record) {
                payload = {...payload, ...record};
            } else {
                alert(msg);
            }
        }
        yield put({type: DetailActionTypes.initRecord, payload});
    } catch (e) {
        console.log(e);
    }
}

