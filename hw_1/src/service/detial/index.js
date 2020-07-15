import service from "../helper";

export async function getOneRecord(params = {}) {
    return service('/api/getOneRecord', params, 'POST');
}
