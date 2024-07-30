var lengthOfLongestSubstring = function (s) {
    let str = ''
    let max = 0

    let len = s.length
    for (let i = 0; i < len; i++) {
        let cur = s[i]
        if (!str.includes(cur)) {
            str += cur
            max = Math.max(str.length, max)
        } else {
            let index = str.indexOf(cur)
            str = str.slice(index + 1) + cur
        }
    }
    return max
}
