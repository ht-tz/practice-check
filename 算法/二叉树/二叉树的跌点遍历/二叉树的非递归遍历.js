/*
 * @Author: htz
 * @Date: 2023-09-03 12:22:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-10 15:50:43
 * @Description: 二叉树的层序遍历
 */
//迭代法实=实现递归的遍历
// 入栈 右 -> 左

// 出栈 中 -> 左 -> 右
var preorderTraversal = function (root, res = []) {
  if (!root) return res
  const stack = [root]
  let cur = null
  while (stack.length) {
    // cur赋值为栈顶
    cur = stack.pop()
    if (stack.length) break
    //之后把元素加入到数组
    res.push(cur.val)
    //栈结构是先进来后出的，先弹出右节点 ，在弹出左节点， 才能显处理左节点
    //先将右孩子入栈，在将左孩子入栈，这样出栈顶时候，先push  l 在push r
    cur.right && res.push(cur.right)
    cur.left && res.push(cur.left)
  }
  return res
}

//后序遍历
// 左右中
// 入栈顺序：左 -> 右  出栈是   中 -> 右 -> 左  翻转结果就是左右中

function postorderTraversal(root, res = []) {
  if (!root) return []
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    if (root) {
      res.push(node.val)
    }
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return res.reverse()
}

// 中序遍历

//入栈  左右
// 出站左中右
// 左中右
function inorderTraversal(root, res = []) {
  let stack = []
  let cur = root

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur)
      //一直向左遍历
      cur = cur.left
    } else {
      // 左节点遍历完，出栈
      cur = stack.pop()
      res.push(cur.val)
      // 右节点遍历
      cur = cur.right
    }
  }
  return res
}
