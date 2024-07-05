/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// var allPathsSourceTarget = function (graph) {
//     let res = []
//     let path = []
//     const dfs = (graph, cur) => {
//         // 找出来一条符合的路径 //当前数字是最后一个数字
//         if (cur === graph.length - 1) {
//             res.push([...path])
//             return
//         }
//
//         //遍历链接的所有点
//         for (let i = 0; i < graph[cur].length; i++) {
//             //将遍历的节点放到路径来, 图中的graph[cur] 是当前节点的所有链接节点，当前节点是 graph[cur]中的第i个元素
//             path.push(graph[cur][i])
//             // 下一层
//             dfs(graph, graph[cur][i])
//             path.pop()
//         }
//     }
//
//     path.push(0)
//     dfs(graph, 0)
//     return res
// };
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// var allPathsSourceTarget = function (graph) {
//     let res = []
//     //初始队队列，包含起点和当前路径
//     let queue = [[0, [0]]]
//     while (queue.length) {
//         //取出第一个元素
//         const [node, path] = queue.shift()
//         if (node === graph.length - 1) {
//             res.push([...path])
//         } else {
//             for (let neighbor of graph[node]) {
//                 queue.push([neighbor, [...path, neighbor]])
//             }
//         }
//     }
//     return res
// };

var allPathsSourceTarget = function (graph) {
    let res = []
    let queue = [[0, [0]]]
    while (queue.length) {
        const [node, path] = queue.shift()
        if (node === graph.length - 1) {
            res.push([...path])
        } else {
            // graph[node] 下一层，node是这一层的起点
            for (let nbr of graph[node]) {
                queue.push([nbr, [...path, nbr]])
            }
        }
    }
    return res
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))