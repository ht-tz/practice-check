/**
 * 贪心算法局部最优解， 每次取最大跳跃步数（即最大覆盖范围）
 * @param nums
 * @returns {boolean}
 */
function canJump(nums) {
    if(nums.length ==1) return true
    let cover = 0;
    //每次的跳跃中在覆盖范围，i+nums[i] nums[i]是增量， 覆盖最大范围范围距离
    for (let i = 0; i <= cover; i++) {
        //在遍历当前的可覆盖范围中，获取下次最大的可覆盖范围，
        cover = Math.max(i + nums[i], cover)
         //覆盖范围>=数组的下标
        if (cover >= nums.length - 1) {
            return true
        }
    }
    return false
}