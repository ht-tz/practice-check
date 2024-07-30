function minDepth(root) {
    function getMinHeight(node) {
        if (node === null) return 0
        let lh = getMinHeight(node.left)
        let rh = getMinHeight(node.right)
        if (node.right === null && node.left !== null) {
            return 1 + lh
        }
        if (node.right !== null && node.left === null) {
            return 1 + rh
        }

        return 1 + Math.min(lh, rh)
    }

    return getMinHeight(root)
}

function minDepth(root) {
    if (root == null) return 0

    let queue = [root]
    let count = 0
    while (queue.length) {
        let size = queue.length
        while (size--) {
            let node = queue.shift()
            if (node.left === null && node.right === null) {
                return count
            }
            if (node.right) queue.push(node.right)
            if (node.left) queue.push(node.left)
        }

        count++
    }
    return count
}
