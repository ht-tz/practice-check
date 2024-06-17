/*
 * @Author: htz
 * @Date: 2024-06-16 16:48:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-16 17:29:12
 * @Description: 计算目录树的深度
 */
const tree = {
  name: 'root',
  children: [
    { name: '叶子1-1' },
    { name: '叶子1-2' },
    {
      name: '叶子2-1',
      children: [
        {
          name: '叶子3-1',
          children: [
            {
              name: '叶子4-1',
              children: [{}],
            },
          ],
        },
      ],
    },
  ],
}
//
// function getTreeDepth(tree) {
//   if (!tree) return 0
//   let stack = [tree]
//   let count = 0
//   while (stack.length) {
//     let size = stack.length
//     while (size--) {
//       const node = stack.shift()
//       if (node.children && node.children.length) {
//         // 这里需要将子节点也入栈，因为可能存在子节点的子节点
//         stack.push(...node.children)
//       }
//     }
//     count++
//   }
//   return count
// }
// console.log(getTreeDepth(tree))
//如果目录树为空，返回 0。
// 创建一个队列，并将根节点入队。
// 初始化一个变量 level 为 1，用于记录当前的层级。
// 进入循环，直到队列为空：

// 获取当前队列中的节点数量，该数量表示当前层级的节点数。
// 遍历当前层级的节点数：

// 出队一个节点。
// 如果节点存在子节点，则将子节点入队。

// 增加 level 的值。

// 返回 level - 1，即为目录树的深度。

function getTreeDepth(tree) {
  if (!tree) return 0
  let maxLevel = 0
  const dfs = (node, count) => {
    // 退出条件, 到底了，节点了就是退出条件
    if (!node.children || node.children.length === 0) {
      maxLevel = Math.max(count, maxLevel)
      return
    }
    // 遍历子节点
    let children = node.children
    for (const item of children) {
      dfs(item, count + 1)
    }
  }
  dfs(tree, 1)
  return maxLevel
}

console.log(getTreeDepth(tree))
