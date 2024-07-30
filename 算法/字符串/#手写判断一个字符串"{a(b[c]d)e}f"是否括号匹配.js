function isMatch(l, r) {
    if (l == '(' && r == ')') return true
    if (l == '[' && r == ']') return true
    if (l == '{' && r == '}') return true
    return false
}

function matchBracket(str) {
    let len = str.length
    if (len === 0) return true

    let stack = []
    let ls = "{[("
    let rs = "}])"

    for (let i = 0; i < len; i++) {
        const s = str[i]
        if (ls.includes(s)) {
            stack.push(s)
        } else if (rs.includes(s)) {
            //右括号判断栈顶
            let top = stack[stack.length - 1]
            if (isMatch(top, s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}
// 功能测试
const str = '{a(b[c]d)e}f'
console.log(matchBracket(str))