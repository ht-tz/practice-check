/*
 * @Author: htz
 * @Date: 2024-07-20 11:21:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-20 11:38:35
 * @Description: 验证二叉搜索树
 */
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

/**
 * 思路：遍历二叉搜索树，验证这个二叉搜索树是不是 递增序列就行
 */
function isValidBST(noderoot) {
    let res = []
    const transval = (node) => {
        if (node === null) return
        transval(node.left)
        // 注意顺序
        res.push(node.val)
        transval(node.right)
    }
    transval(root)
    console.log(res)
    for (let i = 1; i < res.length; i++) {
        // 【2,2,2】
        if (res[i] <= res[i - 1]) return false
    }
    return true
}

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

let root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(root)
console.log(isValidBST(root)) // true
