/**
 * @author hw
 * @date 2020-07-10
 */
/**
 * @desc 生成验证码
 */
export function buildCheckCode() {

    let code = '';
    const length = 4;
    const codeChars = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    for (let i = 0; i < length; i++) {
        const charIndex = Math.floor(Math.random() * 62);
        code += codeChars[charIndex];
    }

    return code;
}
