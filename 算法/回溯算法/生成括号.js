//https://leetcode.cn/problems/generate-parentheses/
// 22. 括号生成
//

var generateParenthesis = function (n) {
    let res = []

    function backtrack(t, k, r) {
        if (k === n && r === n) {
            res.push(t)
            return
        }
        if (k < n) {
            backtrack(t + '(', k + 1, r)
        }
        if (k > r && r < n) {
            backtrack(t + ')', k, r + 1)
        }
    }

    backtrack('', 0, 0)
    return res
}


var generateParenthesis = function (n) {
    let res = []
    function backtrack(s, l, r) {
        if (s.length === 2 * n) {
            res.push(s)
            return
        }
        if (l < n) {
            backtrack(s + '(', l + 1, r)
            if (r < l) {
                backtrack(s + ')', l, r + 1)
            }
        } else if (r < n) {
            backtrack(s + ')', l, r + 1)
        }
    }

    backtrack('', 0, 0)
    return res
}
