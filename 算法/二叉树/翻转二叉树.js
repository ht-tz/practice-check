class TreeNode {
    constructor(val, left, right) {
        this.val = val ? val : 0
        this.left = left ? left : null
        this.right = right ? right : null
    }
}



function swap(root) {
    let temp = root.left
    root.left = root.right
    root.right = temp
}

function invertTree(root) {
    if (root === null) return root
    const rightNode = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(rightNode)
    return root
}