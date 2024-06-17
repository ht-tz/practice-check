var isValid = function (s) {
    let stack = []
    let len = s.length
    for (let i = 0; i < len; i++) {
        let c = s.charAt(i)
        switch (c) {
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break;
            case '{':
                stack.push("}")
                break
            default:
                if (!c == stack.pop()) return false
        }
    }
    return stack.length == 0
}

isValid("()[]{}") 