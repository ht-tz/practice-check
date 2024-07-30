/*
 * @Author: htz
 * @Date: 2024-07-30 00:34:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-30 00:48:12
 * @Description: Object.is
 */

/**
 * 1. 类似于3等
 * 2. 处理0 和 NaN不同
 */
function ObjectIs(a, b) {
    if (x === y) {
        //  针对 +0 和 -0 的特殊情况 false
        // -Infinity!== Infinity
        return x !== 0 || 1 / x === 1 / y
    } else {
        // 针对 NaN 的特殊情况,  ===NaN不=等于NaN，取反就是NaN等于NaN
        return x !== x && y !== y
    }
}

// -0 === +0  true
// NaN === NaN false

//Objet.is(NaN, NaN)  true
//Object.is(0, -0)  false
