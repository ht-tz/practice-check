function longestCommonPrefix(strs) {
    let len = strs.length
    if (!len) return ''
    let res = strs[0]
    for (let i = 1; i < len; i++) {
        let k = 0
        while (k < res.length && res[k] === strs[i][k]) {
            k++
        }
        res = res.slice(0, k)
    }
    return res
}

let strs = ["flower", "flow", "flight"];


console.log(longestCommonPrefix(strs))

