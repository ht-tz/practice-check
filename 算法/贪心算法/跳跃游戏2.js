/**
 * 每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // 每次覆盖最大
    // 每一次取出最大的跳跃步数，整体最优解，最后得到整体最大覆盖范围， 看是否到终点
    let cover = 0;
    let len = nums.length
    // 每次在cover范围内部取出最大值，每一移动一个元素， cover得到该元素的最大值
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if (cover >= len - 1) return true
    }
    return false
};
var jump = function (nums) {
    let len = nums.length
    if (len === 1) return 0
    // 当前覆盖的最大距离
    let curCoverage = 0
    // 记录走过的步数
    let ans = 0
    let nextDistance = 0
    //移动下标 到达了当前最远距离的覆盖下标时，步数+1 来增加覆盖距离

    // 1. 覆盖的最远距离不是终点，ans+1 继续走
    // 2. 覆盖的最远距离是终点，结束
    for (let i = 0; i < len; i++) {
        // 更新下一步覆盖最远距离的下标
        nextDistance = Math.max(nextDistance, i + nums[i])
        //遇见当前最远距离的下标，步数+1
        if (i === curCoverage) {
            ans++
            curCoverage = nextDistance
            // 如果当前覆盖的最远距离已经到达终点，直接结束
            if (nextDistance >= len - 1) break
        }
    }
    return ans
}
console.log(jump([2, 3, 1, 1, 4]))

//2. 贪心算法
/**
 * 1. 移动洗标只要遇到当前覆盖最远距离的下标，步数+1，不考虑终点的情况
 * 2. 移动下标，最大移动到 len - 2的地方就可以了
 *    1. 因为移动到 len - 2,  移动下标i ===当前最大覆盖距离洗标的时候，再走一步，覆盖到len - 1
 *    2. 移动下标  不等于 当前最大覆盖距离洗标的时候，说明 当前覆盖的最大距离 因为已经覆盖到len - 2，
 *       不相等只有一种情况，就是超过len - 2了，说明已经覆盖到终点
 *
 */

var jump = function (nums) {
    let len = nums.length
    if (len === 1) return 0
    // 当前覆盖的最大距离
    let curCoverage = 0
    // 记录走过的步数
    let ans = 0
    let nextDistance = 0
    for (let i = 0; i < len - 2; i++) {
        nextDistance = Math.max(nextDistance, i + nums[i])
        if (i === curCoverage) {
            ans++
            curCoverage = nextDistance
        }
    }

    return ans
}
console.log(jump([2, 3, 1, 1, 4]))