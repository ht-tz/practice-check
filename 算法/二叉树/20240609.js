/*
 * @Author: htz
 * @Date: 2024-06-10 00:40:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-10 18:50:45
 * @Description: 请填写简介
 */
function binaryTreePaths(root) {
  let res = []
  if (root === null) return
  // 确定递归函数参数
  const getPaths = (root, path) => {
    //终止条件
    if (root.left === null && root.right === null) {
      path += root.val
      res.push(path)
      return
    }

    // 拼接路径
    path = root.val + '->'
    root.left && getPaths(root.left, path)
    root.right && getPaths(root.right, path)
  }
  getPaths(root, '')
  return res
}
