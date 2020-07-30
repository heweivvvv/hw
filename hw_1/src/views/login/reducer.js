import _ from 'lodash';

const initialState = {
    userName: '',
    password: '',
    checkCode: '',
    checkCodeText: ''
};

const userName = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case 'CHANGE_USERNAME':
            newState.userName = action.payload.userName;
            break;
        default:
            break;
    }
    return {...newState};
}

const password = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case 'CHANGE_PASSWORD':
            newState.password = action.payload.password;
            break;
        default:
            break;
    }
    return {...newState};
}

const checkCode = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case 'CHANGE_CHECKCODE':
            newState.checkCode = action.payload.checkCode;
            break;
        default:
            break;
    }
    return {...newState};
}

const checkCodeText = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case 'CHANGE_CHECKCODETEXT':
            newState.checkCodeText = action.payload.checkCodeText;
            break;
        default:
            break;
    }
    return {...newState};
}

export {userName, password, checkCode, checkCodeText};

