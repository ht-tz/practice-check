// 二叉树每一层的平均值
function averageOfLevels(root) {
    let queue = [];
    let res = [];

    if (root === null) return res
    queue.push(root)
    while (queue.length) {
        let length = queue.length;
        // 记录的每一层的和
        let sum = 0;
        while (length--) {
            let node =  queue.shift();
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        // 记录每一层的平均值
        res.push(sum/length)
        // 记录完成之后清空该层的和
        sum = 0
    }
    return res
}