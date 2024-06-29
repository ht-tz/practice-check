/*
 * @Author: htz
 * @Date: 2023-09-05 22:05:10
 * @LastEditors:
 * @LastEditTime: 2024-06-16 17:28:30
 * @Description: 请填写简介
 */
//求二叉树的最大深度

// 二叉树的高度正好是最大深度，采用后续遍历，左右遍历完成。 从底层向上遍历 左右最大高度+1
function maxDepth(root) {
  function getHeight(node) {
    if (node === null) return 0

    let lh = getHeight(node.left)
    let rh = getHeight(node.right)

    let depth = 1 + Math.max(lh, rh)
    return depth
  }

  return getHeight(root)
}

//迭代法
var maxDepth = function (root) {
  if (!root) return 0
  let count = 0
  let queue = [root]

  while (queue.length) {
    let size = queue.length
    // 处理一层
    while (size--) {
      let node = queue.pop()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    count++
  }
  return count
}
