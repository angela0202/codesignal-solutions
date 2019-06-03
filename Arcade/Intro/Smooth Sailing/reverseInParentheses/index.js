const reverseInParentheses = (str) => {
    return /\(/.test(str) ? reverseInParentheses(str.replace(/\(([^()]*?)\)/g, (_, s) => s.split('').reverse().join(''))) : str;
};