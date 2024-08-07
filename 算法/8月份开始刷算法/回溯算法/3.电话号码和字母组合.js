var letterCombinations = function (digits) {
    // 收集字符串的长度，如果为0，则返回空数组
    let k = digits.length
    if (k === 0) return []
    let res = []
    let path = []
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (k == 1) return map[digits].split("")
    const backtrack = (path, a) => {
        if (path.length === k) {
            res.push(path.join(""))
            return
        }

        for (let str of map[digits[a]]) {
            path.push(str)
            backtrack(path, a + 1)
            path.pop()
        }
    }
    backtrack(path, 0)
    return res
}

console.log(letterCombinations("23"))