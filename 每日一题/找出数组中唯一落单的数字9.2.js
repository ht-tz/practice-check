/**
 * 方法一：
 *  利用map 的key-value特性存储数据
 *  找出其实value为1对应的key值
 */

let map = new Map();
let arr  = [1,4,3,3,2,4,1];

function getUnique(arr) {
    const map = {};

    for (let item of arr) {
        if (!map[item]) {
            map[item] =1
        } else {
            map[item] ++
        }
    }
    for (let  mapKey in map) {
        if (map[mapKey] ===1) {
            return mapKey;
        }
    }
}

let value = getUnique(arr)
console.log(value)

/**
 * 方法2：
 *    如果一个值第一次出现位置和最后一次出现的位置相同
 *    那么这个值就只出现了一次
 */

function getUnique2(arr) {
    return arr.filter(item=> arr.indexOf(item) === arr.lastIndexOf(item))
}

console.log(getUnique2(arr))


/**
 * js的异或运算
 * ·两个相同的数字进行异或运算得到0
 *  0与任何值a异或运算得到a本身
 *
 */

function getUnique3(arr) {
    let result = 0;
    for (let i = 0; i <arr.length ; i++) {
        result ^= arr[i]
    }
    return result;
}

console.log(getUnique3(arr))