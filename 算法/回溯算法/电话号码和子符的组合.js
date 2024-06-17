/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // 空就返回[]数组
    if (digits === "") return []
    // digits 数字集合，长度就是path的长度
    const size = digits.length;
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (!size) return
    if (size === 1) return map[digits].split("")

    let res = []
    let path = []

    backtracking(digits, size, 0)
    return res

    function backtracking(digits, size, index) {
        // path的长度等于size就是收割结果的时候
        if (path.length === size) {
            res.push(path.join(""))
            return
        }
        // 根据索引值取出对应的字符串
        let tempArr = map[digits[index]].split("")

        //每次进来依次取子符
        for (let i = 0; i < tempArr.length; i++) {
            //取字符
            path.push(tempArr[i])
            //递归取第二个
            backtracking(digits, size, index + 1)
            // 回溯
            path.pop()
        }
    }
};
let a = "23"

let res = letterCombinations(a)

console.log(res);