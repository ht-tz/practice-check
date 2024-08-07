var combine = function (n, k) {
    let res = []
    let path = []

    function backtracking(startIndex) {
        if (path.length === k) {
            res.push([...path])
            return
        }
        // 减枝处理 最后i - 到结尾的举例小于 k - path.length  是没有意义的
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backtracking(i + 1)
            path.pop()
        }
    }

    backtracking(1)
    return res
}
console.log(combine(4, 3))