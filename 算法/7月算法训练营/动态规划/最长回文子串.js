/**
 * 516. 最长回文子序列
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 *
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 * 示例 2：
 *
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 1000
 * s 仅由小写英文字母组成
 * @param s
 * @returns {any}
 */
var longestPalindromeSubseq = function (s) {
    // dp [i][j] 表示 s[i] 到 s[j] 最长回文子学的长度
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    // s[i]==s[j] dp[i][j] = dp[i+1][j-1] + 2,  左右各一个直接加2
    // s[i]!=s[j] dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]),
    let len = s.length
    //  dp[i][i] = 1, 单个字符的回文子串长度为1
    for (let i = 0; i < len; i++) {
        // 一个回文子串的长度就是1
        dp[i][i] = 1
    }

    for (let i = len - 1; i >= 0; i--) {
        // j == i 这种情况以及初始化判断了
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][len - 1]
}


// 双指针
var longestPalindromeSubseq = function (s) {
    let len = s.length
    if (len < 2) {
        return s
    }
    // i  == j 的情况
    let maxLen = 1
    // 起始位置
    let begin = 0
    let arr = s.split('')

    const isPalindromeSuseq = (s, l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) return false
            l++;
            r--
        }
        return true
    }
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxLen && isPalindromeSuseq(arr, i, j)) {
                // j  - i+ 1 > maxLen 且这个范围内是回文子串 收集结果，更新边界
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}


// 中心扩散法
var longestPalindrome = function (s) {
    let len = s.length
    if (len < 2) return s

    let start = 0
    let end = 0

    const expand = (s, i, j) => {
        let num = 0
        while (i > 0 && j < len && s[i] === s[j]) {
            i--
            j++
            num++
        }
        // 不是对称的了，不再扩散了
        if (j - (i + 1) > end - start) {
            end = j
            start = i + 1
        }
        return num
    }

    for (let i = 0; i < len; i++) {
        expand(s, i, i)
        expand(s, i, i + 1)
    }

    return s.substring(start, end)
}

// 中心扩散
var longestPalindrome = function (s) {
    let len = s.length
    if (len < 2) return s

    let res = ""
    const expand = (s, i, j) => {
        while (i >= 0 && j < len && s[i] === s[j]) {
            i--
            j++
        }
        // 不是对称的了，不再扩散了
        if (j - (i + 1) > res.length) {
            res = s.substring(i + 1, j)
        }
    }
    for (let i = 0; i < len; i++) {
        expand(s, i, i)
        expand(s, i, i + 1)
    }
    return res
}

