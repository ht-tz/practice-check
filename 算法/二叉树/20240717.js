// 对称二叉树
// https://leetcode.cn/problems/symmetric-tree/
var isSymmetric = function (root) {
    if (root === null) return true
    return isSymmetricTree(root.left, root.right)
    function isSymmetricTree(left, right) {
        if (left === null && right === null) {
            return true
        } else if (left !== null && right === null) {
            return false
        } else if (left == null && right !== null) {
            return false
        } else if (left.val !== right.val) {
            return false
        }
        let ouside = isSymmetricTree(left.left, right.right)
        let inside = isSymmetricTree(left.right, right.left)
        return ouside && inside
    }
}

// 翻转二叉树
function invertTree(root) {
    if (root === null) return root
    let temp = root.left
    root.left = root.right
    root.righ = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
}

function invertTree(root) {
    if (root === null) return root
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        let temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return root
}

function maxDepth(root) {
    if (root === null) return 0
    function getHeight(root) {
        if (root === null) return 0
        let lh = 1 + getHeight(root.left)
        let rh = 1 + getHeight(root.right)
        return Math.max(lh, rh) + 1
    }
    return getHeight(root)
}

function maxDepth(root) {
    if (root === null) return 0
    let count = 0
    let stack = [root]
    while (stack.length) {
        let size = stack.length
        while (size--) {
            let node = stack.pop()
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        count++
    }
    return count
}

function minDepth(root) {
    if (root === null) return 0
    function getMinH(root) {
        if (root === null) return 0
        let lh = getMinH(root.left)
        let rh = getMinH(root.right)
        if (root.left !== null && root.right === null) return 1 + lh
        if (root.left === null && root.right !== null) return 1 + rh
        return Math.min(lh, rh) + 1
    }
    return getMinH(root)
}

function minDepth(root) {
    if (root === null) return 0
    let count = 0
    let stack = [root]
    while (stack.length) {
        let size = stack.length
        count++

        while (size--) {
            let node = stack.shift()
            if (node.left === null && node.right === null) return count
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
    }
    return count
}
