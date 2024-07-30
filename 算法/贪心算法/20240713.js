// // 加油站

// /**
//  * 1. gas总数小于cos总数， 无论哪里触发， 一定跑不了一圈
//  * 2. rest[i] = gas[i] - cos[i] 为前一天剩下的油， i从0开始计算累加到最后一站， 如果累加没有出现负数，说明从0触发， 油料就没断过，那么0就是起点
//  * 3. 如果累加出现负数， 那么起点就是负数出现的位置的下一个位置, 汽车要从非0的地方触发，从后向前看，哪一个节点能这个负数填平的节点就是触发节点
//  * @param gas
//  * @param cost
//  */
// var canCompleteCircuit = function (gas, cost) {
//     //累计油料
//     let cur = 0
//     //从七点出发，邮箱里的油链油料最小的的值
//     let min = Infinity

//     for (let i = 0; i < gas.length; i++) {
//         let rest = gas[i] - cost[i]
//         cur += rest
//         cur = Math.min(cur, min)
//     }

//     // 情况1
//     if (cur < 0) return -1
//     // 情况2
//     if (min >= 0) return 0
//     // 情况3
//     for (let i = gas.length - 1; i >= 0; i--) {
//         let rest = gas[i] - cost[i]
//         min += rest
//         if (min >= 0) return i
//     }
//     return -1
// }

// var canCompleteCircuit2 = function (gas, cost) {
//     // 总油料量大于总消耗，一定可以跑完一圈，说明各个点的剩余量rest[i]相加一定是大于 0
//     // 从i开始累加 累计cur 一旦cur小于0 说明区间[0,i] 不能作为起始点，区间选择哪一个位置作为起点， 到i这里都会断油，起始位置从 i+1开始， 累计量从0开始计算
//     let cur = 0
//     let total = 0
//     let start = 0
//     for (let i = 0; i < gas.length; i++) {
//         let rest = gas[i] - cost[i]
//         cur += rest
//         total += rest
//         if (cur < 0) {
//             start = i + 1
//             cur = 0
//         }
//     }
//     if (total < 0) return -1
//     return start
// }
// // 暴力以每一个加油站为起点模拟一圈
// var canCompleteCircuit3 = function (gas, cost) {
//     for (let i = 0; i < cost.length; i++) {
//         let rest = gas[i] - cost[i]
//         let idx = i % cost.length
//         while (rest >= 0 && idx !== i) {
//             rest += gas[idx] - cost[idx]
//             idx = (idx + 1) % cost.length
//         }

//         if (rest >= 0 && idx === i) return i
//     }

//     return -1
// }

// // 模拟一圈小技巧
// // let arr = [1, 2, 3, 4, 5]
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i % arr.length])
// // }

// console.log(canCompleteCircuit2([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))

// 分发糖果
// /**
//  * * 每个孩子至少分到一个糖果， 相同口味糖果分给相同的孩子， 相同孩子分到相同口味的糖果
//  *  1. 先确定一边，在确定另一边
//  *  2. 先确定右边大于左边，行前向后
//  *  3. 此时的局部最优，右边大于左边， 右边的小孩子糖果都多一个；
//  *  4. 全局最优：相邻的孩子中，评分最高的右孩子获取比左边孩子更多的
//  *  在确定左孩子的情况，从后向前去遍历  为甚麽不能从前往后遍历   5 和 4 比较，要用到 4  和   6 的比较结果
//  *  1.如果 ratings[i] > ratings[i + 1]，此时candyVec[i]（第i个小孩的糖果数量）就有两个选择了，一个是candyVec[i + 1] + 1（从右边这个加1得到的糖果数量）
//  * ，一个是candyVec[i]（之前比较右孩子大于左孩子得到的糖果数量）
//  * 那么又要贪心了，局部最优：取candyVec[i + 1] + 1 和 candyVec[i] 最大的糖果数量，保证第i个小孩的糖果数量既大于左边的也大于右边的。
//  * 全局最优：相邻的孩子中，评分高的孩子获得更多的糖果。
//  * 局部最优可以推出全局最优。所以就取candyVec[i + 1] + 1 和 candyVec[i] 最大的糖果数量，
//  * candyVec[i]只有取最大的才能既保持对左边candyVec[i - 1]的糖果多，也比右边candyVec[i + 1]的糖果多
//  * @param { Array} candyType
//  *
//  */
// var candy = function (ratings) {
//     let candys = new Array(ratings.length).fill(1)
//     for (let i = 1; i < ratings.length; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             candy[i] = 1 + candy[i - 1]
//         }
//     }

//     for (let i = ratings.length - 2; i >= 0; i--) {
//         // 左边 > 右边  看俩各种是右边多一个糖果
//         if (ratings[i] > ratings[i + 1]) {
//             // candy[i]之前右边孩子大于左边孩子的糖果数量， 右边孩子多一个糖果
//             // 左边大于右边，就必须保证 i 位置上的糖果大于左边也大于右边
//             candy[i] = Math.max(candy[i], candy[i + 1] + 1)
//         }
//     }
//     let sum = candy.reduce((pre, cur) => pre + cur, 0)
//     return result
// }
// 柠檬水找零
// var lemonadeChange = function (bills) {
//     // 思路 5直接收下
//     // 10 收了 找5
//     // 20 收了 优先找10 找5 如果不够找3 个 5
//     // 因为5万能。 所有优先消耗10 10 只能给20 找零 5 可以给20 和 10同时找零
//     let five = 0
//     let ten = 0
//     let twenty = 0
//
//     for (let bill of bills) {
//         if (bill === 5) {
//             five++
//         }
//         if (bill == 10) {
//             if (five <= 0) {
//                 return false
//             }
//             ten++
//             five--
//         }
//         if (bill == 20) {
//
//             if (ten > 0 && five > 0) {
//                 ten--
//                 five--
//                 twenty++
//             } else if (five >= 3) {
//                 // 找零5
//                 five -= 3
//                 twenty++
//             } else {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(lemonadeChange([5, 5, 10, 10, 20]))

// var findMinArrowShots = function (points) {
//     let len = points.length
//     if (len === 0) return 0
//     points.sort((a, b) => a[1] - b[1])
//     let count = 1
//     for (let i = 1; i < len; i++) {
//         if (points[i][0] > points[i - 1][1]) {
//             count++
//         } else {
//             //更新上一个区间的边界,
//             //  points[i - 1][1]>= points[i][1] 去小一个区间重叠的才最多
//             points[i][1] = Math.min(points[i][1], points[i - 1][1])
//         }
//     }
//     return count
// }
// let points = [[10,16],[2,8],[1,6],[7,12]]
// console.log(findMinArrowShots(points))


// var eraseOverlapIntervals = function (intervals) {
//     let len = intervals.length
//     if (len === 0) return 0
//     intervals.sort((a, b) => a[1] - b[1])
//     let end = intervals[0][1]
//     let ans = 0
//     for (let i = 1; i < len; i++) {
//         if (intervals[i][0] <= intervals[i - 1][1]) {
//             ans++
//             end = intervals[i][1]
//         }
//     }
//     return len - ans
// }
// let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
// console.log(eraseOverlapIntervals(intervals))

// var monotoneIncreasingDigits = function (n) {
//     n = n.toString()
//     n = n.split("").map(el => +el)
//     console.log(n)
//     let flag = Infinity
//     for (let i = n.length - 1; i >= 0; i--) {
//         if (n[i - 1] >= n[i]) {
//             flag = i
//             n[i - 1] = n[i - 1] - 1
//             // 前面大减去1 后面的直接设置为9 说明前面的数字大于后面的数字， 那后面的数字就 9
//         }
//     }
//     for (let i = flag; i < n.length; i++) {
//         n[i] = "9"
//     }
//     n = n.join("")
//     return +n
// }
// console.log(monotoneIncreasingDigits(322))
/**
 * 1. 遍历字符串， 找到每一个字母的最远距离， 最远距离就是分割点， 换句话说就是统计字母的出现的最远距离
 * 2. 当遍历到i === right 的时候， 就是分割点，这个分割以内包含，这个区间内部所有元素最远距离
 * @param s
 */
var partitionLabels = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    let res = []
    let left = 0, right = 0
    for (let i = 0; i < s.length; i++) {
        // 找到字符最远的边界，
        right = Math.max(right, map.get(s[i]))
        if (i === right) {
            let str = s.slice(left, right + 1)
            res.push(str)
            left = i + 1
        }
    }
    return  res
}
console.log(partitionLabels('ababcbacadefegdehijhklij'))



