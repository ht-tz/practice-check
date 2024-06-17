//https://leetcode.cn/problems/add-strings/description/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0
    let ans = []

    while (i >= 0 || j >= 0 || carry !== 0) {
        let c1 = i >= 0 ? parseInt(num1.charAt(i), 10) : 0
        let c2 = j >= 0 ? parseInt(num2.charAt(j), 10) : 0
        let sum = c1 + c2 + carry
        carry = Math.floor(sum / 10)
        ans.push(sum % 10)
        i--
        j--
    }
    return ans.reverse().join('')
};

let num = '789'
console.log(num.charAt(0) - '0')