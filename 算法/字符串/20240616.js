function longestCommonPrefix(strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0
        while (j < prefix.length && strs[i][j] === prefix[j]) {
            j++
        }
        prefix = prefix.slice(0, j)

    }
    return prefix
}


function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            //倒着缩短一位
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix
}
console.log(longestCommonPrefix(["flower", "flow", "flight", "flowersd"]))
