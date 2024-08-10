var findMinArrowShots = function (points) {
    let len = points.length;
    if (len === 0) return 0;
    points.sort((a, b) => a[1] - b[1]);

    let count = 1;
    for (let i = 1; i < len; i++) {
        if (point[i - 1][1] < points[i][0]) {
            // 有交叉 +1
            result++;
        } else {
            // 更新最小右边界， 更新 完成之后 判断 1 < 0 就再需要
            points[i][1] = Math.min(points[i][1], points[i - 1][1]);
        }
    }

    return count;
};
