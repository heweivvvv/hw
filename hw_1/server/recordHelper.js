const recordFieldType = {
    title: 'required',
    consumeTypeId: 'required',
    payTypeId: 'required',
    count: 'required',
    recordCreateTime: 'auto',
    consumeData: 'required',
    remark: 'optional'
};

function cleanupRecord(record) {
    const cleanedUpRecord = {};
    Object.keys(record).forEach(field => {
        if (recordFieldType[field]) {
            cleanedUpRecord[field] = record[field];
        }
    });
    return cleanedUpRecord;
}

function validateRecord(record) {
    const errors = [];
    Object.keys(recordFieldType).forEach(field => {
        if (recordFieldType[field] === 'required' && !record[field]) {
            errors.push(`Missing mandatory field: ${field}`);
        }
    });

    return (errors.length ? errors.join('; ') : null);
}

export {cleanupRecord, validateRecord};
