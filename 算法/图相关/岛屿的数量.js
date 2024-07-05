function numIslands(grid) {
    let islandCount = 0;
    let len = grid.length
    const dfs = (i, j) => {
        // 检查边界和陆地是否被访问
        // grid[i][j] === '0' 表示已经访问过
        if (i < 0 || j < 0 || i >= len || j >= grid[0].length || grid[i][j] === '0') return
        // 将访问过的陆地标记为0
        grid[i][j] = '0'
        // 遍历 顺时针 一圈一圈的走起
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i + 1, j)
        dfs(i, j - 1)
    }
    //遍历网格
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            //1表示陆地， 如果没有被访问过，则岛屿数量加1
            if (grid[i][j] === '1') {
                islandCount++
                dfs(i, j)
            }
        }
    }
    return islandCount
}

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0
    let islandCount = 0;
    const numsRows = grid.length
    const numsCols = grid[0].length
    // 右，左，下， 上
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    const bfs = (sr, sc) => {
        const queue = [[sr, sc]]
        grid[sr][sc] = '0'// 将访问过的陆地标记为0

        while (queue.length) {
            const [row, col] = queue.shift();
            for (const [dr, dc] of direction) {
                const newRow = row + dr
                const newCol = col + dc
                // 检查边界和陆地是否被访问
                if ( newRow >= 0 && newRow < numsRows &&newCol >= 0 && newCol < numsCols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol])
                    grid[newRow][newCol] = '0'
                }
            }
        }

    }

    for (let i = 0; i < numsRows; i++) {
        for (let j = 0; j < numsCols; j++)
            if (grid[i][j] === '1') {
                islandCount++
                bfs(i, j)
            }
    }

    return islandCount
}
// 测试代码
const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];
console.log(numIslands(grid)); // 输出: 1
