var nextGreaterElement = function (nums1, nums2) {
    let len = nums1.length
    let map = new Map()
    let res = new Array(len).fill(-1)
    // 记录位置信息
    for (let i = 0; i < len; i++) {
        map.set(nums1[i], i)
    }
    let stack = [0]
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            // nums2中单调栈 ，下一个更大的元素
            let top = stack.pop()
            if (map.has(nums2[top])) {
                let index = map.get(nums2[top])
                res[index] = nums2[i]
            }
        }
        stack.push(i)
    }
    return res
}
// nums1 是nums2 的子集合
// nums1中的元素在nums2中找到下一个更大的元素

let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
console.log(nextGreaterElement(nums1, nums2))