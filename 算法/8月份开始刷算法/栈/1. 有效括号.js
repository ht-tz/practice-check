let str = '{[()]}';

function isValid(str) {
    let stack = [];
    for (let s of str) {
        switch (s) {
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            default:
                console.log(5);
                if (s === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
        }
    }
    return stack.length === 0;
}
console.log(isValid(str));
