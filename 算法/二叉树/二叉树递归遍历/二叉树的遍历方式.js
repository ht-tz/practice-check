/*
 * @Author: htz
 * @Date: 2023-09-03 12:20:03
 * @LastEditors:
 * @LastEditTime: 2024-06-10 11:05:51
 * @Description: 请填写简介
 */
//确定递归函数的参数和返回值
// 确定终止条件
// 确定单层递归的逻辑

//二叉树的前序遍历
//前序：中左右
//中序号：左中右
// 后序遍历： 左右中

class treeNode {
  constructor(val, left, right) {
    this.val = this.val === undefined ? 0 : val
    this.left = this.left === undefined ? null : left
    this.right = this.right === undefined ? null : right
  }
}

function preorderTraverval(root) {
  let res = []
  function dfs(root) {
    if (root === null) return
    //前序遍历-中左右
    //从父节点开始
    res.push(root.val)
    //递归左子树
    dfs(root.left)
    //递归右子树
    dfs(root.right)
  }
  //只使用一个参数，使用闭包缓存结果
  dfs(root)
  return res
}

//中序遍历-左中右
function inorderTraversal(root) {
  let res = []
  function dfs(root) {
    if (root === null) return
    //中序遍历-左中右
    //递归左子树
    dfs(root.left)
    //从父节点开始
    res.push(root.val)

    //递归右子树
    dfs(root.right)
  }
  //只使用一个参数，使用闭包缓存结果
  dfs(root)
  return res
}

//后序遍历-左中右
function inorderTraversal(root) {
  let res = []
  function dfs(root) {
    if (root === null) return
    //后序遍历-左右中
    //递归左子树
    dfs(root.left)
    //递归右子树
    dfs(root.right)
    //从父节点开始
    res.push(root.val)
  }
  //只使用一个参数，使用闭包缓存结果
  dfs(root)
  return res
}
