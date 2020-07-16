import service from '../helper';

export async function getConsumeRecords(params = {}) {
    const res = await service('/api/getConsumeRecords', params, 'POST');
    return res;
}

export async function getConsumeTypeList(params = {}) {
    const res = await service('/api/getConsumeTypeList', params);
    return res;
}

export async function getPayTypeList(params = {}) {
    const res = await service('/api/getPayTypeList', params);
    return res;
}

export async function addRecord(params = {}) {
    return service('/api/addRecord', params, 'POST');
}

export async function modifyRecord(params = {}, id) {
    return service('/api/modifyRecord/' + id, params, 'PUT');
}
