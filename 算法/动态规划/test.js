function longestCommonSubsequence(text1: string, text2: string): { length: number, sequence: string } {
    const m = text1.length;
    const n = text2.length;

    // 创建二维数组dp，初始化为0
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 填充dp表
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // 获取LCS长度
    const lcsLength = dp[m][n];

    // 回溯构造LCS
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs = text1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return { length: lcsLength, sequence: lcs };
}

// 测试
const text1 = 'abcde';
const text2 = 'ace';
const result = longestCommonSubsequence(text1, text2);
console.log(`LCS长度: ${result.length}`); // 输出: LCS长度: 3
console.log(`LCS: ${result.sequence}`);   // 输出: LCS: ace
