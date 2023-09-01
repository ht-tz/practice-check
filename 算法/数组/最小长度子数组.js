/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 *
 * 示例：
 *
 * 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * 提示：
 *
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 *
 * 思路：
 *  1.用一个for 循环
 *  2.定义两个指针，代表符合条件的起始位置和符合条件的终止位置
 *  3. end负责累加， 每次加完去判断一下， 是否有符合的值，如果有的话， 总sum - nums[start] start++ start移动一位,保持窗口内的值的和为sum
 *  4. 循环至end<len结束
 *
 */

function minSubArrayLen(target, nums) {
    let start = 0;
    let  end = 0;
    let sum = 0; //子序列数值之和
    let len = nums.length; //子序列长度
    let ans = Infinity;

    while (end < len) {
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            // 说明有符合条件的数组了， 移动左指针，减去最左边的值 精髓
            sum -= nums[start]
            start++
        }
        end++
    }
    return ans === Infinity ? 0 : ans
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))