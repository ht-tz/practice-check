class TreeNode {
    constructor(val, left, right) {
        this.val = val == undefined ? 0 : val
        this.left = left == undefined ? null : left
        this.right = right == undefined ? null : right
    }
}

//前序遍历-中左右
// function preorderTraverval(root) {
//     let res = []
//     const dfs = (root) => {
//         if (root == null) return
//         res.push(root.val)
//         dfs(root.left)
//         dfs(root.right)
//     }
//     dfs(root)
//     return res
// }

// //中序遍历-左中右
// function inorderTraversal(root) {
//     let res = []
//     const dfs = (root) => {
//         if (root === null) return
//         dfs(root.left)
//         res.push(root.val)
//         dfs(root.right)
//     }

//     dfs(root)
//     return res
// }

// //后序遍历-左右中
// function inorderTraversal(root) {
//     let res = []
//     const dfs = (dfs) => {
//         if (root === null) return
//         dfs(root.left)
//         dfs(root.right)
//         res.push(root.val)
//     }

//     dfs(root)
//     return res
// }

function preorderTraversal(root) {
    let stack = []
    let res = []
    stack.push(root)
    //入栈右左， 出栈中 左右
    let cur = null
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res
}

//中序遍历-左中右
function inorderTraversal(root) {
    let res = []
    let stack = []
    // 入栈 左右，出栈左中右
    let cur = root
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur)
            // 左
            cur = cur.left
        } else {
            // 到低了， 开始出栈
            cur = stack.pop()
            res.push(cur.val)
            // 右
            cur = cur.right
        }
    }
    return res
}

//后序遍历-左右中  前序是中左右
function postorderTraversal(root) {
    if (root === null) return root
    let res = []
    let stack = [root]
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        //先进来后出来入栈
        // 左
        cur.left && stack.push(cur.left)
        // 右
        cur.right && stack.push(cur.right)
    }
    return res.reverse()
}

function postorderTraversal(root) { 
    if (!root) {
         retunn[] 
    }
    let stack = [root] 
    let res = [] 
    while (stack.length) {
        let cur = stack.pop()
        if (cur.left) {
             stack.push(cur.left)
        }
         
        if (cur.right) { 
             stack.push(right)
        }
        res.push(cur.val)
        // 入栈最左右中， 出栈中右左
       //  取反左右中
    }
    return res.reverse()
} 




var levelOrder = function(root) {
    //二叉树的层序遍历
    let res = [], queue = [];
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点
        let curLevel = [];
        for(let i = 0;i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};

var levelOrder = function (root) {
    if (root === null) return []
    let res = []
    let queue = []
    queue.push(root)
    while (queue.length) {
        let len = queue.length
        let cl = []
        for (let i = 0; i < len; i++) {
            let cur = queue.shift()
            cl.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        res.push(cl)
    }
    return res
};