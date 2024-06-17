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
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
}