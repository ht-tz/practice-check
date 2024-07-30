// 深度是指的是 上到下 1~n
// 高度是指的是 下到上 1~n
function getHeight(root) {
    if (!root) return -1
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}
// 平衡二叉树的定义：任意一个节点的左右子树的高度差不超过1 


function isBalanced(root) {
    if (!root) return true 
    fucntion getDepth(root ) {
        if (root === null) return  0
        let ld = getDepth(root.left)
        
        if (ld === -1) return -1
        let rd = getDepth(root.right) 
        if(rd === -1) return -1
        if(Math.abs(ld  -rd) > 1) {
             return -1
        } else {
             return 1 + Math.max(ld, rd)
        }
    }
    let fklag = getHeight(root)
    return fklag !== -1
}
