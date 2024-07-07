




var canFinish = function(numCourses, prerequisites) {
    // 记录一次 traverse 递归经过的节点
    const onPath = new Array(numCourses).fill(false);
    // 记录遍历过的节点，防止走回头路
    const visited = new Array(numCourses).fill(false);
    // 记录图中是否有环
    let hasCycle = false;

    const graph = buildGraph(numCourses, prerequisites);

    for (let i = 0; i < numCourses; i++) {
        // 遍历图中的所有节点
        traverse(graph, i);
    }

    // 只要没有循环依赖可以完成所有课程
    return !hasCycle;

    function traverse(graph, s) {
        if (onPath[s]) {
            // 出现环
            hasCycle = true;
            return;
        }

        if (visited[s] || hasCycle) {
            // 如果已经找到了环，也不用再遍历了
            return;
        }
        // 前序遍历代码位置
        visited[s] = true;
        onPath[s] = true;
        for (let t of graph[s]) {
            traverse(graph, t);
        }
        // 后序遍历代码位置
        onPath[s] = false;
    }

    function buildGraph(numCourses, prerequisites) {
        // 图中共有 numCourses 个节点
        const graph = new Array(numCourses).fill().map(() => []);
        for (let edge of prerequisites) {
            const from = edge[1];
            const to = edge[0];
            // 修完课程 from 才能修课程 to
            // 在图中添加一条从 from 指向 to 的有向边
            graph[from].push(to);
        }
        return graph;
    }
};

let result = canFinish(4, [[1,0],[2,0],[3,1],[3,2]]);
