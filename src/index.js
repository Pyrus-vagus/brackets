module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.reduce((a, b) => a.concat(b));
    let stack = [];
    for (let item of str) {
        let brInd = brackets.indexOf(item);
        let duplicate = brackets.filter(
            (item, index) => brackets.indexOf(item) !== index
        );
        if (duplicate.indexOf(item) !== -1) {
            if (stack.indexOf(item) === -1) {
                stack.push(item);
            } else if (stack.pop() !== item) {
                return false;
            }
        } else if (brInd % 2 === 0) {
            stack.push(brInd + 1);
        } else {
            if (stack.pop() !== brInd) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
