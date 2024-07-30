/*
 * @Author: htz
 * @Date: 2024-07-21 11:01:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-21 11:16:18
 * @Description:  Objectis
 */

// Object.is
/**
 *  1.不会转换比较两个值的类型，这点和 === 很相似，他们之间也存在一些区别
 *  2.NaN 在 === 中是不相等的， 在object.is中是相等的
 *  3. +0 -0 === 是相等的，而在 Object.is中是不相等的
 */

Object.is = function (x, y) {
    if (x === y) {
        // 当前情况下，只有一种情况是特殊的，即 +0 -0
        // 如果 x !== 0，则返回true
        // 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
        return x !== 0 || 1 / x === 1 / y
    }

    // x !== y 的情况下，只需要判断是否为NaN，如果x!==x，则说明x是NaN，同理y也一样(三等NaN是不相等的)
    // x和y同时为NaN时，返回true
    return x !== x && y !== y
}
