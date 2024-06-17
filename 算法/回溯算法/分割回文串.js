/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let len = s.length
    let res = []
    let path = []

    backtracking(0)
    return res

    function backtracking(startIndex) {
        if (startIndex >= len) {
            //遍历到叶子节点了，开始收集结果
            res.push([...path])
            return
        }

        // 单层循环逻辑
        for (let i = startIndex; i < len; i++) {
            if (!isPalindrome(s, startIndex, i)) {
                continue
            }
            //截取目标字符串
            let str = s.slice(startIndex, i + 1)
            path.push(str)
            backtracking(i + 1)
            path.pop()
        }
    }
};


function isPalindrome(s, l, r) {
    for (let i = l, j = r; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
}


function isPr(s, l, r) {
    let i = l, j = r
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}


let ss = 'aab'
console.log(partition(ss))