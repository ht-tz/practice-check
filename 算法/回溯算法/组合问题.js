function combine(n, k) {
    //回溯三部曲
    // 1. 确定递归的函数以及返回值，以及参数 
    // 二维数组用于存放结果 
    let result = []
    // 用于存放路径   
    let path = []
    //参数 n是集合的长度，k是path的长度，startIndex是搜索开始索引
    const backtracking = (n, k, startIndex = 1) => {
        //终止条件：path.length === k，开始收集结果 path是存放根节点的路径到叶子结点的路径
        if (path.length === k) {
            result.push([...path])
            return
        }
        //for是横向遍历， 递归是纵向遍历
        for (let i = startIndex; i <= n; i++) {
            path.push(i)
            // 递归控制纵向遍历，下一层从i+ 1开始, i轮番push进去这个path
            backtracking(n, k, i + 1)
            // 回溯撤销处理节点, 例如取到12，弹出2，才能收集到13 
            path.pop()
        }
    }

    // n数组的长度
    backtracking(n, k)
    return result
}

let n = 4, k = 2


console.log(combine(n, k));