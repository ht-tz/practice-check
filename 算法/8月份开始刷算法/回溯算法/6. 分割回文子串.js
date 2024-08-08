const isPalindrome = (s, start, end) => {
    let i = start, j = end;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
console.log(isPalindrome('abcbaq', 0, 5))
var partition = function (s) {
    let res = []
    let path = []
    let len = s.length
    const backtracking = (s, start) => {
        if (start >= len) {
            res.push([...path])
            return
        }
        for (let i = start; i < len; i++) {
            if (!isPalindrome(s, start, i)) continue
            path.push(s.substring(start, i + 1))
            backtracking(s, i + 1)
            path.pop()
        }
    }
    backtracking(s, 0)
    return res
}
console.log(partition('aab'))