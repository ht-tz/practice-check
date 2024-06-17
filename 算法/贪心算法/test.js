// /**
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// var eraseOverlapIntervals = function (intervals) {
//   let len = intervals.length;
//   if (len === 0) return 0;
//   intervals.sort((a, b) => a[1] - b[1]);
//   // 记录非交叉区间的个数
//   let end = intervals[0][1];
//   let count = 1;

//   for (let i = 1; i < len; i++) {
//     // 小于等于 没有交叉
//     if (end <= intervals[i][0]) {
//       // 更新区间分割点位
//       end = intervals[i][1];
//       count++;
//     }
//   }
//   return len - count;
// };

// 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  if (intervals.length === 0) return res;
  intervals.sort((a, b) => a[0] - b[0]);
  let pre = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (pre[1] < cur[0]) {
      res.push(pre);
      pre = cur;
    } else {
      pre[1] = Math.max(pre[1], cur[1]);
    }
  }
  res.push(pre);
  return res;
};
