/**
 * 难度：中等
 * 题目
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 *
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 *
 * 示例：
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 *
 * 提示：
 * ● 1 <= s1.length, s2.length <= 104
 * ● s1 和 s2 仅包含小写字母
 */
function checkInclusion(s1, s2) {
    let [l1, l2] = [s1.length, s2.length]
    if (l1 > l2) return false
    let map = new Map()
    // 统计排列子串字母出现的次数
    for (let s of s2) {
        map.set(s, (map.get(s) || 0) + 1)
    }
    //1. 统计s1中字母出现的次数
    // s1的字符在s2中出现一次 计数 - 1 ， 引用计数为0 就删除该字母
    // tMap.size == 0 true other false
    // start~end<l1没有意义
    for (let i = 0; i <= l2 - l1; i++) {
        let tMap = new Map(map)
        // 保持窗口
        for (let j = 0; j < l1; j++) {
            let cur = s2[i + j]
            if (tMap.has(cur)) {
                tMap.set(cur, (tMap.get(cur) || 0) - 1)
                //去除出已经用完的字母
                if (tMap.get(cur) === 0) tMap.delete(cur)
            } else {
                // 剪枝处理
                break
            }
        }
        if (tMap.size === 0) return true
    }
    return false
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let [l1, l2] = [s1.length, s2.length]
    if (l1 > l2) return false
    let cmap = new Map()
    // 统计排列子串字母出现的次数
    for (let s of s1) {
        cmap.set(s, (cmap.get(s) || 0) + 1)
    }

    // 记录窗口中对的字符串
    let tMap = new Map()
    let l = 0
    let r = 0
    // 记录当前抽口内部满足条件的字符的个数
    let vaild = 0

    while (r < l2) {
        let char = s2[r]
        r++
        if (cmap.has(char)) {
            tMap.set(char, (tMap.get(char) || 0) + 1)

            // 判断字符串的个数是否满足要求
            if (tMap.get(char) === cmap.get(char)) {
                vaild++
            }
        }
        // 窗口大小和s1 相同， 判断窗口是需要收缩左边界
        while (r - l >= l1) {
            // 如果 valid === need，size 窗口已经包含了s1的一个排列
            if (vaild === cmap.size) return true
            let dstr = s2[l]
            l++
            if (cmap.has(dstr)) {
                // 这个字符刚好存在,这个字符的计数减去1
                if (tMap.get(dstr) === cmap.get(dstr)) {
                    vaild--
                }
                // 将该字符从窗口中移除 下一轮循环 让新的值进来
                tMap.set(dstr, (tMap.get(dstr) || 0) - 1)
            }
        }
    }
    return false
}
