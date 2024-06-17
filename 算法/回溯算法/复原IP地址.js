/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    let path = []
    let len = s.length
    backtracking(s, 0)
    return res

    function backtracking(s, startIndex) {
        console.log(path)
        // path 为4 且startIndex >= len 说明到收获结果的时候了
        if (path.length === 4 && startIndex >= len) {
            res.push(path.join('.'))
            return
        }
        // 满足条件的结果已经被收获了  startIndex >= len 说明有多余的数据 不符合要求了
        // 如果startIndex等于s的长度，但是ip段的数量不够 4 相反ip段够4，startIndex长度大于s都是不符和要求的
        if (path.length === 4 || startIndex >= len) return
        let temp = ""
        //单层递归逻辑
        for (let i = startIndex; i < Math.min(len, startIndex + 3); i++) {
            temp = s.slice(startIndex, i + 1)
            if (isValidIpSegment(s, startIndex, i)) {
                path.push(temp)
                backtracking(s, i + 1)
                //回溯
                path.pop()
            }

        }
    }
};

//判断ip段是否合法
function isValidIpSegment(s, startIndex, endIndex) {
    let str = s.substring(startIndex, endIndex + 1)
    let tempVal = Number(str)
    if (str.length === 0 || isNaN(tempVal) || tempVal > 255 || tempVal < 0 || (str.length > 1 && str[0] === "0")) return false
    return true
}

let s = '25525511135'
console.log(restoreIpAddresses('25525511135'))