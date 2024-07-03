var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        // 一定是get has不行，has判断一直都有，我们要判断的是字母的个数
        if (!map.get(t[i])) return false
        map.set(t[i], map.get(t[i]) - 1)
    }
    return true
}


let s = "aacc"
let t = "ccac"
console.log(isAnagram(s, t))