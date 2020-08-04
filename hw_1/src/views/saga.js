import {takeEvery, put, select, call} from 'redux-saga/effects';
import {buildCheckCode} from "../utils/util";
import {ActionTypes} from "./login/config";
import {ActionTypes as HomeActionTypes} from "./home/config";
import service from '../service/helper'
import Cookies from 'js-cookie'
import {browserHistory} from '../history';
import {getConsumeRecords} from "../service/home";

export function* rootSaga() {

    yield takeEvery('LOGIN', userLogin);
    yield takeEvery('GETRECORDSLIST', getRecordsList)

}

export function* userLogin() {
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

export function* getRecordsList() {
    const {msg, records, result} = yield call(getConsumeRecords);
    if (result) {
        yield put({type: HomeActionTypes.updateRecordList, payload: {recordsList: records}});
    } else {
        alert(msg);
    }
}
