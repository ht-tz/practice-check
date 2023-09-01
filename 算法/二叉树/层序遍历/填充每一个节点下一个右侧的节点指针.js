/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function connect(root) {
    if (root == null) return null;
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (i < size - 1) {
                //已经弹出一个了,那么弹出的.next指向 当前队列的第一个值
                //i<size - 1, size - 1代表最后一个的话就指向当前队列的第一个，最后一个已经初始化为null了
                node.next = queue[0]
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
}
