// 对称二叉树
function isSymmetric(root) {
    //左右子树 左右中， 右左中
    if (!root) return true

    const compare = (left, right) => {
        // 左节点为空，右节点不为空， 不对称，return false
        if (left !== null && right === null) return false
        // 左不空，右不为空 不对称 ，false
        else if (right !== null && left === null) return false
        // 左右空0 true
        else if (left === null && right === null) return true
        // 排除节点在排除数值是否一样
        else if (left.val !== right.val) return false

        //此时就是： 左右节点不为空， 且数值相同的情况, 这时候才左下一层递归

        // 左子树 左，右子树——右
        let out = compare(left.left, right.right)
        let inside = compare(left.right, right.left)
        let isSame = out && inside
        //走到这个地方值一定是相同的且不为空
        return isSame
    }
    // 开始递归
    return compare(root.left, root.right)
}


// 翻转二叉树

function invertTree(root) {
    if (!root) return null
    // 把每一个节点的左右孩子翻转一下就能达到效果
    const rightNode = root.right
    root.right = root.left
    root.left = rightNode
    invertTree(root.left)
    invertTree(root.right)
    return root
}


function test1(root) {
    if (!root) return null
    const invertNode = (root, left, right) => {
        let temp = left
        left = right
        right = temp
        // 交换左右节点的指针指向
        root.left = left
        root.right = right
    }

    let stack = []
    stack.push(root)
    while (stack.length) {
        let curNode = stack.pop()
        if (curNode) {
            //前序遍历中左右，入栈顺序，右左中
            curNode.right && stack.push(curNode.right)
            curNode.left && stack.push(curNode.left)
            stack.push(curNode)
            // 交换节点的标识
            stack.push(null)
        } else {
            // 弹出null
            let node = stack.pop()
            // 交换左右节点
            invertNode(root, root.left, root.right)
        }
    }
    return root
}

var invertTree = function (root) {
    if (root === null) return root

    const swap = (root, left, right) => {
        let temp = left
        left = right
        right = temp
        // 更改父节点指针指向
        root.left = left
        root.right = right
    }

    let stack = []
    stack.push(root)
    while (stack.length) {
        let size = stack.length
        while (size--) {
            let curNode = stack.shift()
            swap(curNode, curNode.left, curNode.right)
            curNode.left && stack.push(curNode.left)
            curNode.right  && stack.push(curNode.right)
        }
    }

    return root
};