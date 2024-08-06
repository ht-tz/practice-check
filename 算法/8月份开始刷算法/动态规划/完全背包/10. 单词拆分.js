// dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
// dp[i] = true 意味着 dp[j] = true，其中 j <= i 且 str.substring(0, j) 在字典中。
// dp[i] = false 意味着 dp[j] = false，其中 j < i 且 str.substring(0, j) 不在字典中。
// 状态转移方程：dp[i] = dp[j] && dict.contains(str.substring(j, i))
// 初始化：dp[0] = true
// 返回：dp[n]
const wordBreak = function (s, wordDict) {
    let len = s.length
    let dp = new Array(len + 1).fill(false)
    dp[0] = true
    for (let j = 0; j <= length; j++) {
        for (let i = 0; i < wordBreak.length; i++) {
            if (j >= wordBreak[i].length) {
                if (s.slice(j - wordBreak[i].length, j) === wordBreak[i] && dp[j - wordBreak[i].length]) {
                    dp[j] = true
                }
            }
        }
    }
    return dp[len]
}
