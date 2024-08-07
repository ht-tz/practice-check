/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let str = ''
    let prefix = ""
    let len = s.length
    for (let i = 1; i <= len; i++) {
        // 第一个一定是从头开始的
        str = s.slice(0, i)
        if (len % str.length == 0) {
                prefix = s.replace(str, "")
                if (prefix === "") {
                      return true
                }
        }
    }
    return false
}

let s = 'aba'
console.log(repeatedSubstringPattern(s))
