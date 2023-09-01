/**
 * 首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
 * 遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
 * 定义int变量count，用来统计 a+b+c+d = 0 出现的次数。
 * 在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
 * 最后返回统计值 count 就可以了
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map()
    for (let i = 0; i <nums1.length ; i++) {
        for (let j = 0; j <nums2.length ; j++) {
             let sum  =  nums1[i]+nums2[j]
             map.set(sum,(map.get(sum)||0) + 1)
        }
    }

    let count = 0;
    for ( let i = 0; i <nums3.length ; i++) {
        for (let j = 0; j <nums4.length ; j++) {
            let sum  =  nums1[i]+nums2[j]
            count += map.get( 0  -sum) || 0
        }
    }

    return count
}