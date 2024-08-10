var partitionLabels = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    let res = []
    let l = 0
    let r = 0
    for (let i = 0; i < s.length; i++) {
        r = Math.max(r, map.get(s[i]))
        if (i === r) {
            res.push(i - l + 1)
            l = i + 1
        }

    }
    return res
}
console.log(partitionLabels("ababcbacadefegdehijhklij"))