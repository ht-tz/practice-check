/**
 * 课程表
 * 207. 课程表
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * ● 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 示例 2：
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 *
 * 提示：
 * ● 1 <= numCourses <= 2000
 */

// 思路：邻接表->有向图
// 示例二就是有环、无法完成循环数组
const canFinish = (numCourses, prerequisites) => {
    // 记录traversal遍历过的节点
    let onPath = new Array(numCourses).fill(false)
    // 防止重复遍历同行一个节点
    let visited = new Array(numCourses).fill(false)
    const graph = buildGraph(numCourses, prerequisites)
    //[ [ 1, 2 ], [ 3 ], [ 3 ], [] ]
    let hasCycle = false
    // 遍历图所有的节点， 只要没循环依赖就可以完成所有课程
    for (let i = 0; i < numCourses; i++) {
        traverse(graph, i)
    }
    return !hasCycle

    // 从节点s开始遍历
    function traverse(graph, s) {
        // 退出条件
        // 有环
        if (onPath[s]) {
            hasCycle = true
            return;
        }
        // 已经遍历过, 或者 找到了环也不用遍历了
        if (visited[s] || hasCycle) return
        // 前序遍历
        // 将s节点标记为已遍历
        visited[s] = true
        onPath[s] = true
        for (const t of graph[s]) {
            traverse(graph, t)
        }
        console.log(graph[s])
        //遍历完成
        onPath[s] = false
    }

    //建立邻接表
    function buildGraph(numCourses, prerequisites) {
        const graph = new Array(numCourses).fill(0).map(() => []);
        for (const [to, from] of prerequisites) {
            // 注意：有向图是单向的，所以是from->to
            // 边的方向是被依赖关系， 修完所有的课程 from 才能修to 课程
            graph[from].push(to);
        }
        return graph
    }
}

// 1. 构建邻接表
// 2. 遍历图，如果发现环，则无法完成所有课程
// 3. 遍历图，如果发现没有环，则可以完成所有课程

canFinish(4, [[1,0],[2,0],[3,1],[3,2]]);

