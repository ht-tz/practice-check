/*
 * @Author: htz
 * @Date: 2024-07-21 09:45:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-21 10:34:31
 * @Description: 比较版本号
 */
// sort 的排序原理
// 如果提供了comparFn 所有非undefined的数组元素都会按照比较函数的返回值进行排序
function compare(a, b) {
    if (a - b > 0) {
        return 1
    } else if (a - b < 0) {
        return -1
    } else {
        //相等保持原来在数组中的顺序
    }
}

function versionCompare(a, b) {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let len = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < len; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        } else if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    return 0
}
const version = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']

const v = version.sort(versionCompare)
console.log('v', v)