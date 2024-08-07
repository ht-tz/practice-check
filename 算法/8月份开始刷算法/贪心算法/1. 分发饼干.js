var findContentChildren = function (g, s) {
    if (s.length <= 1) return s.length
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let count = 0
    let index = s.length - 1
    for (let i = g.length - 1; i >= 0; i--) {
        if (s[index] >= g[i]) {
            index--
            count++
        }
    }
    return count
}

var findContentChildren = function (g, s) {
    if (s.length <= 1) return s.length
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let index = 0
    // 小饼干先喂饱小胃口
    for (let i = 0; i < g.length; i++) {
        if(index < g.length  && g[i] <= s[index]) {
            index++
        }
    }
    return index
}

