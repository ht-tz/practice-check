var jump = function (nums) {
    //当前覆盖改的最大距离的位置
    let curPosition = 0;
    let maxPosition = 0;
    if (nums.length == 1) return 0;

    let steps = 0;
    for (let i = 0; i < nums.length; i++) {
        maxPosition = (i + nums[i], maxPosition)
        if (i == curPosition) {
            steps++
            curPosition = maxPosition
            if (curPosition >= nums.length - 1) {
                break
            }
        }
    }
    return steps;
};


var jump = function (nums) {
    // dp[i] 表示 到i位置的最小步数 dp[i]
    let dp = new Array(nums.length).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < nums.length; i++) {
        // 内层控制去 前进的步数
        for (let j = 0; j <= nums[i] && i + j < nums.length; j++) {
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
        }
    }
    return dp[nums.length - 1]
}