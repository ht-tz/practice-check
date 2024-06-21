function longestCommonPrefix(strs) {
    let len = strs.length
    if (len === 0) return 0
    let prefix = strs[0]
    for (let i = 1; i < len; i++) {
        let plen = prefix.length
        let j = 0
        while (j < plen) {
            if (prefix[j] == strs[i][j]) {
                j++
            }
             break;
        }
        prefix = prefix.substring(0, j+1)
    }

    return prefix
}

let arr = ['flow', 'flow23', 'fle']
console.log(longestCommonPrefix(arr))