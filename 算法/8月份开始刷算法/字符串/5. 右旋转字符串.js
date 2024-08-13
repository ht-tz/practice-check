// 右旋字符串
function reverseLeftWords(s, n) {
    const len = s - 1
    let str = s.split("")
    reverseRange(str, 0, n - 1)
    reverseRange(str, n, len)
    reverseRange(str, 0, len)
}

// 字符串范围反转
function reverseRange(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr
}

console.log(reverseRange("abcdefg".split(""), 0, 6))