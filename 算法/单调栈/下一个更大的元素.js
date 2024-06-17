/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = new Map();
    let res = new Array(nums1.length).fill(-1);
    stack.push(0)
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }
    for (let i = 1; i < nums2.length; i++) {
        let sTop = stack[stack.length - 1];
        if (nums2[i] < nums2[sTop]) {
            stack.push(i);
        } else if (nums2[i] === nums2[sTop]) {
            stack.push(i)
        } else {
            while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
                if (map.has(nums2[stack[stack.length - 1]])) {
                    let index = map.get(nums2[stack[stack.length - 1]]);
                    res[index] = nums2[i];
                }
                stack.pop();
            }
            stack.push(i);
        }
    }
    return res
};
let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
let res = nextGreaterElement(nums1, nums2)
console.log(res)