// 有效括号
{
    const isValid = function (s) {
        const stack = []
        for (let i = 0; i < s.length; i++) {
            let c = s[i]
            switch (c) {
                case '(':
                    stack.push(')');
                    break;

                case '[':
                    stack.push(']')
                    break;
                case '{':
                    stack.push('}')
                    break;
                default :
                    if (c !== stack.pop()) return false
            }
        }
        return stack.length === 0
    }
}

{
    const isValid = function (s) {
        const stack = []
        map = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        for (let c of s) {
            if (c in map) {
                this.stack.push(c)
                continue;
            }
            // 根据key取出value 判断剋
            if (map[stack.pop()] !== c) return false;
        }
        return !stack.length;
    }
}