// 字母区间划分
/**
 * @param {string} s
 * @return {number[]}
 */
//1.在遍历的过程中相当于找到字母的最远边界，
// 如果找到之前遍历过的所有字母最远边界的，说明这个边界就是分割点了。
// 此前出现的所有字母最远边界，也就到这个边界了
var partitionLabels = function (s) {
    // 统计没一个字母最后出现的位置
    // 从头遍历子符，并更新子符最远出现下标，如果能找到最远出现位置下标和当前下标相等，则就是分割点
    // 知道最远位置， 最远位置之前就把该字母所有的位置都包含进来了
    let arr = s.split('')
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        //统计每一个子符最后出现的位置
        map.set(arr[i], i)
    }
    //记录结果
    let result = []
    let left = 0
    let right = 0
    for (let i = 0; i < arr.length; i++) {
        //找到字符出现的最远边界，这个位置之前，一定是包所有的元素都包含上了，该结合里面的每一个元素都可能超过8这个边界
        right = Math.max(right, map.get(arr[[i]]))
        //找到之前字符最大出现位置和下标相等，此时right就是分割点
        if (i === right) {
            //目标入库
            result.push(right - left + 1)
            // 更新左边界
            left = i + 1
        }
    }
    return result
};