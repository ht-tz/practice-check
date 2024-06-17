function LCS(s1, s2) {
    let l1 = s1.length
    let l2 = s2.length

    let dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0))
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            console.log(dp)
        }
    }

    let lcs = ''
    let i = l1
    let j = l2

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs
            i--
            j--
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--
        } else {
            j--
        }

    }
    return lcs
}

let s1 = "abcde"
let s2 = "ace"

console.log(LCS(s1, s2))