var wiggleMaxLength = function (nums) {
    let len = nums.length
    if (len < 2) return len
    let res = 1
    let preDiff = 0
    let curDiff = 0

    for (let i = 0; i < len; i++) {
        curDiff = nums[i + 1] - nums[i]
        if (preDiff <= 0 && curDiff > 0 || preDiff >= 0 && curDiff < 0) {
            res++
            preDiff = curDiff
        }
    }
    return res
}