import {ActionTypes} from './config';

const userName = (state = '', action) => {

    let payload = action.payload;
    if(action.type === ActionTypes.changeUserName){
        return payload.userName
    }
    return state;
};

const password = (state = '', action) => {

    let payload = action.payload;
    if(action.type === ActionTypes.changePassword){
        return payload.password
    }
    return state;
};

const checkCode = (state = '', action) => {
    let payload = action.payload;
    if(action.type === ActionTypes.changeCheckCode){
        return payload.checkCode
    }
    return state;
};

const checkCodeText = (state = '', action) => {
    let payload = action.payload;
    if(action.type === ActionTypes.changeCheckCodeText){
        return payload.checkCodeText
    }
    return state;
};

const userInfo = (state = {}, action) => {
    let payload = action.payload;
    if(action.type === ActionTypes.setUserInfo){
        return payload.userInfo
    }
    return state;
};

export const reducers = {userName, password, checkCode, checkCodeText, userInfo};
