function evalRPN(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (isNaN(Number(token))) {
            let n1 = stack.pop();
            let n2 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(n1 + n2);
                    break;
                case '-':
                    stack.push(n2 - n1);
                    break;
                case '/':
                    stack.push(Math.floor(n2 / n1));
                    break;
                case '*':
                    stack.push(n1 * n2);
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
}
console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
