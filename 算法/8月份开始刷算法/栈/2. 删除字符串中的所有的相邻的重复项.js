var removeDuplicates = function (s) {
    const stack = [];
    for (let i of s) {
        if (i === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    return stack.join('');
}