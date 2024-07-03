/**
 * 647. 回文子串
 * 已解答
 * 中等
 * 相关标签
 * 相关企业
 * 提示
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 *
 * 回文字符串 是正着读和倒过来读一样的字符串。
 *
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 * 示例 2：
 *
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 */


// dp 方法  空间复杂度比较高
function countSubstrings(s) {
    let r = s.length
    // dp[i][j] 表示 s[i, j] 是否是回文串
    // 两种情况 s[i] === s[j]   s[i] ！== s[j]
    //不等就是false
    // 相等
    /**
     * 1. i = j   例如 a  一定是回文子串
     * 2. i - j<= 1  aa
     * 3. i - j >1  s[i]= s[j] 的看 s[i+ 1] = s[j - 1] =》dp[i+1][j - 1] = true
     */
    let count = 0
    // dp[i][j] s在i到j是否是回文子串
    let dp = new Array(r).fill(0).map(() => new Array(r).fill(false))
    // y = i  x = j 从下到上，从左到右
    for (let i = r - 1; i >= 0; i--) {
        for (let j = i; j < r; j++) {
            if (s[i] === [j]) {
                if (j - i <= 1) {
                    dp[i][j] = true
                    count++
                } else if (dp[i + 1][j  - 1]) {
                    // 扩散 两边  是true
                    dp[i][j] = true
                    count++
                }
            }
        }
    }
    return count
}

// 中心扩散法  abcdcba abba
function countSubstrings(s) {
    let res = 0
    let len = s.length
    const expand = (s, i, j) => {
        let num = 0
        while (i >= 0 && j < s.length && s[i] == s[j]) {
            num++
            i--
            j++
        }
        return num
    }

    for (let i = 0; i < len; i++) {
        res += expand(s, i, i)
        res += expand(s, i, i + 1)
    }

    return res
}