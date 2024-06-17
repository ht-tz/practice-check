// 读题nums1是nums2的子集
function nextGreaterElement(nums1, nums2) {
    if (nums1.length === 0) return []
    let len = nums1.length
    let map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        // 数字: 索引
        map.set(nums1[i], i)
    }
    let res = new Array(len).fill(-1)
    let stack = []
    stack.push(0)
    for (let i = 1; i < nums2.length; i++) {
        if (nums2[2] < nums2[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (nums2[i] === nums2[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {

                // 如果这个栈顶元素在的map中存在，那么在map的这个栈顶的数字，（就转换成）在nums2数组中，右边第一个大的数字就是nums2[i]
                if (map.has(nums2[stack[stack.length - 1]])) {
                    //  取出栈定元素对应nums1这个元素在nums1中的索引
                    let index = map.get(nums2[stack[stack.length - 1]])
                    res[index] = nums2[i]
                }
                stack.pop()
            }
            stack.push(i)
        }
    }
    return res
}

function nextGreaterElement(nums1, nums2) {
    let len = nums1.length
    let map = new Map()
    let stack = []
    let res = new Array(len).fill(-1)
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let index = stack.pop()
            map.set(nums2[index], nums2[i])
        }
        stack.push(i)
    }
    for (let j = 0; j < nums1.length; j++) {
        if (map.has(nums1[j])) {
            res[j] = map.get(nums1[j])
        }
    }

    return res
}

let nums1 = [2, 4], nums2 = [1, 2, 3, 4]
console.log(nextGreaterElement(nums1, nums2))