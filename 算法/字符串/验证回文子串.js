/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        // 匹配任何字母和非字符串
        let reg = /[^a-zA-Z0-9]/g;
        let str = s.replace(reg, '').toLowerCase();
        return str === str.split('').reverse().join('');
    };

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let reg = /[^a-zA-Z0-9]/g
    let str = s.replace(reg, "").toLowerCase()
    let arr = str.split("")
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++
        r--
    }
    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));