/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 长度0 len 0
    let len = nums.length
    if (len == 0) return 0

    // 哈希表
    let arr = nums.sort((a, b) => a - b)
    arr = [...new Set(arr)]
    let curLen = 1
    let maxLen = 0
    for (let i = 0; i < len; i++) {
        if (arr[i] == arr[i - 1] + 1) {
            curLen++
        } else {
            maxLen = Math.max(maxLen, curLen)
            curLen = 1 //开始新的序列
        }
    }
    //最后一个也可能是，如果是： Math.max(cur,max) 不
    maxLen = Math.max(maxLen, curLen)
    return maxLen
};

var longestConsecutive = function (nums) {
     let nSet = new Set(nums)
    let max= 0
    for (let n of nSet) {
          if(!nSet.has(n - 1)) {
               let cur = 0
              while (nSet.has(n++)) {
                   cur++
              }
              max = Math.max(max, cur)
          }
    }
    return max
}