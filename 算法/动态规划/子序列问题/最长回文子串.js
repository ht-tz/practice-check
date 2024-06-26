function longestPalindromeSubseq(s) {
    let len = s.length;
    //dp[i][j]表示[i,j]区间内最长回文子串的长度
    let dp = new Array(len).fill().map(() => new Array(len).fill(0))
    //初始化
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1;
    }

    for (let i = len - 1; len >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][len - 1];
}

