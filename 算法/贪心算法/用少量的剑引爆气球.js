/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //如果为空的话， return 0
  let len = points.length;
  if (len === 0) return 0;
  //排序对数据大小进行排序
  points.sort((a, b) => a[0] - b[0]);
  // points不为空至少一支箭
  let result = 1;
  for (let i = 1; i < len; i++) {
    //i的左边界大于i- 1的右边界，永远可能相交
    if (points[i][0] > points[i - 1][1]) {
      //此时用箭个数+1
      result++;
    } else {
      //更新重叠气球的最小比最小边界
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    }
  }
  return result;
};
