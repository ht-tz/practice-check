var evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        if (isNaN(Number(token))) {
            // 是数出栈两个数字
            const n2 = stack.pop();
            const n1 = stack.pop();
            //判断运算符的类型，数字从新入栈
            switch (token) {
                case '+':
                    stack.push(n1 + n2)
                    break;
                case '-':
                    stack.push(n1 - n2)
                    break;
                case '*':
                    stack.push(n1 * n2)
                    break;
                case '/':
                    stack.push(n1 / n2 | 0)
                    break;
            }
        } else {
             stack.push(Number(token))
        }
    }
    //因没有遇见预算符号而呆在栈中
    return stack[0]
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", " * ", "/", " * ", "17", "+", "5", "+"]));

{
    var evalRPN = function (tokens) {
        const stack = [];
        for (const token of tokens) {
            if (isNaN(Number(token))) { // 非数字
                const n2 = stack.pop(); // 出栈两个数字
                const n1 = stack.pop();
                switch (token) { // 判断运算符类型，算出新数入栈
                    case "+":
                        stack.push(n1 + n2);
                        break;
                    case "-":
                        stack.push(n1 - n2);
                        break;
                    case "*":
                        stack.push(n1 * n2);
                        break;
                    case "/":
                        stack.push(n1 / n2 | 0);
                        break;
                }
            } else { // 数字
                stack.push(Number(token));
            }
        }
        return stack[0]; // 因没有遇到运算符而待在栈中的结果
    };
    console.log(evalRPN(["10", "6", "9", "3", "+", "-11", " * ", "/", " * ", "17", "+", "5", "+"]));
}