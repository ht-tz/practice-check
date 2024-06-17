/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    //字符串的长度为i dp[i]为true, 表示可以拆分为一个或者多个字传出现的单词
    //dp[i] = true, 且在【j,i]这个区间的子串出现字典里面，那么 dp[i]一定是true [j<i ]
    // 递推公式是if[j, i]值个区间的子串出现子字典里，那dp[i]一定是 true 
    //初始化dp[0]=0是为了初始化true
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (i >= wordDict[j].length) {
                if (s.slice(i - wordDict.length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true;
                }
            }
        }
    }
    return dp[s.length]
};


var wordBreak = function (s, wordDict) {
    //字符串的长度为i dp[i]为true, 表示可以拆分为一个或者多个在字典中出现的单词
    //dp[i] = true, 且在【j,i]这个区间的子串出现字典里面，那么 dp[i]一定是true [j<i ]
    // 递推公式是if[j, i]值个区间的子串出现子字典里，那dp[i]一定是 true 
    //初始化dp[0]=0是为了初始化true
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.slice(j, i)
            if (i >= wordDict[j].length) {
                if (wordDict.includes(word) && dp[j]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
};