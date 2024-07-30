/**
 * 【题目描述】
 *
 * 给定一个有 n 个节点的有向无环图，节点编号从 1 到 n。请编写一个函数，找出并返回所有从节点 1 到节点 n 的路径。每条路径应以节点编号的列表形式表示。
 *
 * 【输入描述】
 *
 * 第一行包含两个整数 N，M，表示图中拥有 N 个节点，M 条边
 *
 * 后续 M 行，每行包含两个整数 s 和 t，表示图中的 s 节点与 t 节点中有一条路径
 *
 * 【输出描述】
 *
 * 输出所有的可达路径，路径中所有节点的后面跟一个空格，每条路径独占一行，存在多条路径，路径输出的顺序可任意。
 *
 * 如果不存在任何一条路径，则输出 -1。
 *
 * 注意输出的序列中，最后一个节点后面没有空格！ 例如正确的答案是 1 3 5,而不是 1 3 5， 5后面没有空格！
 * @param n
 * @param m
 */

// 邻接矩阵你=
var allPath = function (n, m) {
    let res = []

    let path = []
    // cur 当前遍历的节点， end到达的节点
    const dfs = function (graph, cur, end) {
        if (cur === end) {
            // 找到一个符合的路径
            res.push([...path])
            return
        }

        //因为默认是从哪开始的
        for (let i = 1; i <= n; i++) {
            // 便利节点 x 找到所有的节点
            if (graph[cur][i] === 1) {
                path.push(i)
                // 下一层
                dfs(graph, i, end)
                path.pop()
            }
        }
    }
    // 节点数据
    let pnum = n
    // 边数据
    let bnum = m
    // 表示读取每一条边的 两个端点
    let s, t
    // graph 表示无向图
    // 使用邻接矩阵 graph表示无向图
    let graph = new Array(new Array(pnum + 1).fill(0)).map(() => new Array(pnum + 1).fill(0))

    while (bnum--) {
        s = bnum + 1
        t = bnum + 1
        graph[s][t] = 1
    }

    path.push(1)
    // 开始遍历
    dfs(graph, 1, pnum)
    //输出结果
    if (res.length === 0) {
        console.log(-1)
    } else {
        res.forEach((item) => console.log(item.join(' ')))
    }
}

allPath(5, 5, [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [4, 5],
])
