// 摆动序列
function wiggleMaxLength(nums) {
    if (nums.length === 1) return 1
    let prediff = 0
    let curdiff = 0

    //记录峰值的个数 , 默认从左边有一个点，这样就有一个pre了
    let count = 1
    for (let i = 0; i < nums.length - 1; i++) {
        curdiff = nums[i + 1] - nums[i]
        // pre 小于等于0  下坡 curdiff 先下坡后上坡 底部峰值  先上后下 顶部峰值
        if (prediff <= 0 && curdiff > 0 || prediff >= 0 && curdiff < 0) {
            count++
            //有摆动的时候子更新prediff的值
            prediff = curdiff
        }
    }
    return count
}