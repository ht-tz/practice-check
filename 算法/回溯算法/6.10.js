var letterCombinations = function (digits) {
    if (digits === "") return []
    // digits 数字集合，长度就是path的长度
    const size = digits.length;
    if (!size) return
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (size === 1) return map[digits].split("")

    digits = digits.split("").map(el =>el - "0")
    const path = [];
    const result = [];

    const backtracking = (index) => {
        if (path.length === size) {
            let str = path.join("")
            result.push(str)
            return
        }
        // index指向键盘的字符集合
        let letters = map[digits[index]]
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i])
            backtracking(index + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
}

let digits = "23"

console.log(letterCombinations(digits))