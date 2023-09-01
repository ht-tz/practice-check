/**
 *有序数组的平方
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 * 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]】
 *
 * 1. 最大最小值 一定在两边
 * 2. 建立两个左右指针，向中间靠拢，left<=right
 * 3. 新组的长度 = nums.length,最大的数据排在最后，依次向后排
 * 4. 循环结束 返回新的数组
 */

function sortSquare(nums) {
    let len = nums.length;
    //左指针，右指针
    let left = 0;
    let right = len - 1;
    let array = new Array(len).fill(0)
    let k = nums.length  -1
    // 开始比较
    while (left <= right) {
        //比较两端数据大小开始放入数组
        if (nums[left] * nums[left] < nums[right] * nums[right]) {
            array[k--] =  nums[right]*nums[right]
            //右指针向左移动一位
            right --
        } else {
            array[k--] = nums[left]*nums[left]

            //左指针向右移动一位
            left++
        }
    }

    return array;
}

console.log(sortSquare([-8,-5,-1,0,2,3,12]))