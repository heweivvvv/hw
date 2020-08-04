import {ActionTypes} from "./config";

const recordsList = (state = [], action) => {
    const payload = action.payload;

    if (action.type === ActionTypes.updateRecordList) {
        return payload.recordsList
    }
    return state;
}

export const reducers = {recordsList};
