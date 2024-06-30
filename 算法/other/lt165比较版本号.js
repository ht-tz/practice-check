// 1. https://leetcode.cn/problems/compare-version-numbers/description/

// 2. 比较版本号
var compareVersion = function (version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');

    let [len1, len2] = [arr1.length, arr2.length]
    let i, j = 0
    while (i < len1 || j < len2) {
        let a, b = 0
        if (i < len1) a = parseInt(arr1[i++], 10)
        if (j < len2) b = parseInt(arr2[j++], 10)
        if (a !== b) {
            return a > b ? 1 : -1
        }
    }
    return 0
}