// // 把没一个节点的左右孩子翻转一下
// function invertTree(root) {
//     if (root === null) return root;
//     let temp = root.left;
//     let right = root.right
//     root.left = right;
//     root.right = temp;
//     invertTree(root.left)
//     invertTree(root.right)
//     return root
// }
//
// // 迭代法
// function invertTree(root) {
//     if (!root) return root
//     let stack = [root]
//     while (stack.length) {
//         let node = stack.pop()
//         let temp = node.left;
//         node.left = node.right
//         node.right = temp
//         if (node.right) {
//             stack.push(node.right)
//         }
//         if (node.left) {
//             stack.push(node.left)
//         }
//     }
//
//     return root
// }

//左子树的左边 等于 右子树的右边
const isSymmetric = function (root) {
    const compare = (left, right) => {
        if (left !== null && right) {
            return false
        } else if (left === null && right == null) {
            return true
        } else if (left == null && right !== null) {
            return false
        } else if (left.val !== right.val) {
            return false
        }

        // 左右节点比结束
        let outside = compare(left.left, right.right)
        let inside = compare(left.right, right.left)
        return outside && inside
    }

    if (root === null) {
        return true
    }
    return compare(root.left, root.right)
}


const isSymmetric = function (root) {
    if (root == null) return true

    let stack = [root.left, root.right]

    while (stack.left) {
        let ln = stack.pop()
        let rn = stack.pop()

        if (ln == null && rn == null) continue
        if (!ln || !rn || (ln.val !== rn.val)) {
            return false
        }
        stack.push(ln.left)
        stack.push(rn.right)
        stack.push(ln.right)
        stack.push(rn.left)
    }

    return true
}