import {ActionTypes} from "./config";

const id = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord) {
        return payload.id
    }

    return state;
};

const consumeTypeId = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeConsumeTypeId) {
        return payload.consumeTypeId
    }

    return state;
}

const title = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeTitle) {
        return payload.title
    }

    return state;
}

const payTypeId = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changePayTypeId) {
        return payload.payTypeId
    }

    return state;
}

const consumeData = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeConsumeData) {
        return payload.consumeData
    }

    return state;
}

const count = (state = 0, action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeCount) {
        return payload.count
    }

    return state;
}

const remark = (state = '', action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeRemark) {
        return payload.remark
    }

    return state;
}

const editing = (state = false, action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord || action.type === ActionTypes.changeEditing) {
        return payload.editing
    }

    return state;
}

const payTypes = (state = [], action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord) {
        return payload.payTypes
    }

    return state;
}

const consumeTypes = (state = [], action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.initRecord) {
        return payload.consumeTypes
    }

    return state;
}

export const reducers = {
    id,
    consumeTypeId,
    title,
    payTypeId,
    consumeData,
    count,
    remark,
    editing,
    payTypes,
    consumeTypes
};
