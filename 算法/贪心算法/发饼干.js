/**
 * @param g是胃口
 * @param s是饼干的尺寸
 */

// 先喂饱大的
const findContentChildren = (g, s) => {
    s.sort((a, b) => a - b)
    g.sort((a, b) => a - b)
    let count = 0
    let index = s.length - 1; //饼干的数组下标
    for (let i = g.length - 1; i >= 0; i--) { //比那里胃口
        if (index >= 0 && s[index] >= g[i]) {
            index--
            count++
        }
    }

    return count
}

//在喂饱小的
const findContentChildren1 = (g, s) => {
    s.sort((a, b) => a - b)
    g.sort((a, b) => a - b)
    let index = 0; //胃口
    for (let i = 0; i < s.length; i++) { // 饼干
        if (index < g.length && g[index] <= s[i]) { //胃口
            index++
        }
    }

    return index
}

// 胃口
let g = [1, 2, 7, 10]
// 饼干尺寸
let s = [1, 2, 5, 9]

