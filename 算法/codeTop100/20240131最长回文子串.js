/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    if (len < 2) return s
    let maxLen = 1
    let begin = 0

    let arr = s.split("")
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxLen && isPalindromeSuseq(arr, i, j)) {
                // 更新max
                maxLen = j - i + 1
                //更新begin
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
};


function isPalindromeSuseq(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }

    return true
}