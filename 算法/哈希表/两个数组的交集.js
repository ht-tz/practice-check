/**
 * 求两个数组的交集
 */
function intersection(nums1, nums2) {
    if (nums1.length < nums2.length) {
        let temp  = nums1;
        nums1 = nums2
        nums2 = temp
    }
    let nset = new Set(nums1)
    let newset = new Set()
    for (let i = 0; i <= nums2.length - 1; i++) {
        let item = nums2[i];
        if (nset.has(item)){
            newset.add(item)
        }
    }
    return Array.from(newset)
}

let num1 = [1]
let num2 = [1]
console.log(intersection(num1,num2))