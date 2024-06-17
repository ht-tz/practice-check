// 递增子序列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = []
    let path = []
    let len = nums.length
    backtracking(0)
    return res

    function backtracking(startIndex) {
        //  符氮素
        if (path.length > 1) {
            res.push([...path])
            // 因为需要取树上所有的元素的
        }
        // 使用set记录使用过的数据
        let set = new Set()
        for (let i = startIndex; i < len; i++) {
            // 因为是递增序列，后一个数要大于前一个数, 同一节点用过的数，使用过以后就不能再次使用了
            if (nums[i] <path[path.length  - 1] || set.has(nums[i])) {
                continue
            }
            // 记录同一层的数据
            set.add(nums[i])
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
};