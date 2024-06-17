/*
 * @Author: htz
 * @Date: 2023-09-03 12:22:46
 * @LastEditors:
 * @LastEditTime: 2024-06-10 19:48:23
 * @Description: 请填写简介
 */
// 前序遍历 中左右
//   压栈顺序：右左中
{
  function preorderTravesal(root, res = []) {
    if (!root) return res
    const stack = [root]
    let cur = null
    while (stack.length) {
      //将节点弹出， 避免重复操作
      cur = stack.pop()
      if (cur) {
        stack.push(cur.val)
      }

      //右 空节点不入栈，下面再将右姐节点加入栈
      cur.right && stack.push(cur.right)
      //左
      cur.left && stack.push(cur.left)
      //中
      stack.push(cur)
      //中节点访问过但是还没有做处理
      stack.push(null)
    }

    return res
  }
}

{
  // 中序遍历  左中右
  //压栈顺序  右中左
  function inorderTravesal(root, res = []) {
    if (!root) return res
    const stack = [root]
    while (stack.length) {
      const cur = stack.pop()
      if (cur) {
        res.push(cur.val)
        //终止本次循环，不执行下面的代码
        continue
      }

      // 直到遇见空指针的时候，才会下一个节点放进结果集
      cur.right && stack.push(cur.right)
      stack.push(cur)
      stack.push(null)
      cur.left && stack.push(cur.left)
    }

    return res
  }
}

{
  // 后续遍历 左右中
  // 入栈顺序中右左
  function postorderTraversal(root, res = []) {
    if (!root) return res
    const stack = [root]
    while (stack.length) {
      const cur = stack.pop()
      if (cur) {
        res.push(cur.val)
      }
      stack.push(cur)
      stack.push(null)
      cur.right && stack.push(cur.right)
      cur.left && stack.push(cur.left)
    }
    return res.reserse()
  }
}
