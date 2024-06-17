function maxDepthn(root) {
    if (!root) return 0
    let depth = 0;
    for (let node of root.children) {
        depth = Math.max(depth, maxDepthn(node))
    }

    return depth + 1
}


function maxDepth(root) {
    if (root === null) return 0;

    let count = 0
    let queue = [root]

    while (queue.length) {
        let size = queue.length
        count++
        while (size--) {
            let node = queue.shift()
            for (let item of node.children) {
                item.queue.push(item)
            }
        }
    }
    return count
}