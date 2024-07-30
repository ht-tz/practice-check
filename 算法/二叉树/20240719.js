/*
 * @Author: htz
 * @Date: 2024-07-19 00:42:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-19 23:12:27
 * @Description: 路径总和
 */

function hasPathSum(root, targetSum) {
    if (root === null) return false
    const dfs = (cur, sum) => {
        // 遇见叶子点，计数为0
        if (sum === 0 && cur.left === null && cur.right === null) return true
        //到底了 不为0
        if (sum !== 0 && cur.left === null && cur.right === null) return false
        // 左节点不为空， 遇见叶子节点直接返回true
        if (cur.left) {
            sum = sum - cur.left.val
            if (dfs(cur.left, sum)) return true
            sum = sum + cur.left.val //回溯
        }
        if (cur.right) {
            sum = sum - cur.right.val
            if (dfs(cur.right, sum)) return true
            sum = sum + cur.right.val //回溯
        }
        return false
    }
    return dfs(root, targetSum - root.val)
}

function hasPathSum(root, targetSum) {
    if (root === null) return false
    const dfs = (cur, sum) => {
        // 遇见叶子节点
        // 左右为空   和相等  和不相等
        if (sum === 0 && cur.left === null && cur.right === null) return true
        if (sum !== 0 && cur.left === null && cur.right === null) return false
        // 不为空
        if (cur.left) {
            //看左边的方向是否被有你符合的路径 有就是true
            sum = sum - cur.left.val
            if (dfs(cur.left, sum)) return true
            sum = sum + cur.left.val //回溯
        }
        if (cur.right) {
            sum = sum - cur.right.val
            if (dfs(cur.right, sum)) return true
            sum = sum + cur.right.val //回溯
        }
        return false
    }
}

// 迭代法， 来求路径和
function hasPathSum(root, targetSum) {
    if (root === null) return false
    let nodeArr = [root]
    let varArr = [0]

    while (nodeArr.length) {
        let curNode = nodeArr.shift()
        let curVal = varArr.shift()
        curVal += curNode.val
        if (curNode.left === null && curNode.right === null && curVal === targetSum) return true
        if (curNode.left) {
            nodeArr.push(curNode.left)
            varArr.push(curVal)
        }
        if (curNode.right) {
            nodeArr.push(curNode.right)
            varArr.push(curVal)
        }
    }
    return false
}

// 二叉树所有路径
var binaryTreePaths = function (root) {
    let res = []
    const getPath = function (node, curPath) {
        if (node.left === null && node.right === null) {
            // 处理最后一个节点
            res.push(curPath)
            return
        }

        curPath += node.val + '->'
        if (node.left) {
            getPath(node.left, curPath)
        }
        if (node.right) {
            getPath(node.right, curPath)
        }
    }
    getPath(root, '')
    return res
}
