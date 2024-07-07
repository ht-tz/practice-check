/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            let a = stack.pop()
            let b = stack.pop()
            switch (token) {
                case "*":
                    stack.push(a * b)
                    break;
                case "/":
                    stack.push(a / b)
                    break
                case "+":
                    stack.push(a + b)
                    break
                case "-":
                    stack.push(b - a)
                    break
            }
        } else {
            //不是符号
            stack.push(Number(token))
        }
    }
    // 计算好的总是在栈顶
    return stack[0]
}

console.log(Number("/"))