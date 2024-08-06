function countSubstrings(s) {
    let res = 0
    let len = s.length

    const expand = (s, i, j) => {
        let num = 0
        while (i >= 0 && j < len && s[i] === s[j]) {
            num++
            // 中心扩散的精髓
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


function countSubstrings(s) {
    let res = 0
    let len = s.length
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    dp[i][j] = true
                    res++
                } else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true
                    res++
                }
            }
        }
    }
    return res
}