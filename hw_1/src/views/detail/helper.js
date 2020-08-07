/**
 * @desc 检查输入信息，待实现 显示界面可以在输入错误时显示错误
 * @param record
 * @returns {boolean}
 */
export function checkRecord(record) {
    let result = true;
    const checks = ['title', 'consumeData', 'count', 'payTypeId', 'consumeTypeId'];
    checks.forEach(k => {
        if (!record[k]) {
            result = false;
        }
    });
    return result;
}
