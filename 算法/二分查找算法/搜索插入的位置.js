/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。

 *  1.目标值在数组所有元素之前
 *  1.目标值在数组所有元素之前
 *  2.目标值等于数组中某一个元素
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * #
 * 思路
 *  3.目标值插入数组中的位置
 *  4.目标值在数组所有元素之后
 */

 //左闭右开区间
function searchInsert(array,target) {
    let left = 0;
     let right = array.length;
     while(left < right) {
          let mid = Math.floor((left+ right) / 2)
         if (array[mid]>target) {
             right = mid
         } else if(array[mid]<target) {
             left = mid+1
         } else{
             return mid
         }
     }
     return  -1
}