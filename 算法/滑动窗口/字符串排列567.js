//https://leetcode.cn/problems/permutation-in-string/description/

/**
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 *
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 示例 2：
 *
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 *
 *
 * 提示：
 *
 * 1 <= s1.length, s2.length <= 104
 * s1 和 s2 仅包含小写字母
 */
var checkInclusion = function (s1, s2) {
    let l1 = s1.length
    let l2 = s2.length

    if (l1 > l2) return false

    const map = new Map()
    for (const char of s1) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let i = 0; i <= l2 - l1; i++) {
        //重置滑动窗口的字符映射
        let tpMap = new Map(map)
        //统计窗口内部的字符串
        for (let j = 0; j < l1; j++) {
            let char = s2[i + j]
            if (tpMap.has(char)) {
                tpMap.set(char, tpMap.get(char) - 1)
                if (tpMap.get(char) === 0) tpMap.delete(char)
            } else {
                break
            }
        }
        if (tpMap.size === 0) return true
    }
    return false
}


let s1 = "ab", s2 = "eidbaooo"
console.log(checkInclusion(s1, s2))