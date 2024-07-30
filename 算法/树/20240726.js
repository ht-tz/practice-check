// /*
//  * @Author: htz
//  * @Date: 2024-07-26 16:33:06
//  * @LastEditors: Please set LastEditors
//  * @LastEditTime: 2024-07-26 17:13:32
//  * @Description: 树
//  */

// // 给定一个多叉树 tree 和一个节点的 ID id，编写一个函数 findNodeNameById，用于在多叉树中查找指定节点 ID 对应的节点名称。如果找到节点，则返回节点名称；如果未找到，则返回 null。

// const tree = {
//     name: 'root',
//     id: 1,
//     children: [
//         {
//             name: 'c1',
//             id: 2,
//             children: [
//                 {
//                     name: 'c11',
//                     id: 3,
//                     children: [],
//                 },
//                 {
//                     name: 'c12',
//                     id: 4,
//                     children: [],
//                 },
//             ],
//         },
//         {
//             name: 'c2',
//             id: 5,
//             children: [
//                 {
//                     name: 'c21',
//                     id: 6,
//                     children: [],
//                 },
//                 {
//                     name: 'c22',
//                     id: 7,
//                     children: [],
//                 },
//             ],
//         },
//     ],
// }

// // function findNodeNameById(tree, id) {
// //     if (tree.id === id) return tree.name
// //     let map = {}
// //     const dfs = (tree) => {
// //         map[tree.id] = tree.name
// //         if (tree.children && tree.children.length > 0) {
// //             for (const item of tree.children) {
// //                 dfs(item)
// //             }
// //         }
// //     }
// //     dfs(tree)
// //     console.log(map)
// //     return map[id] ? map[id] : null
// // }

// function findNodeNameById(tree, id) {
//     let stack = [tree]
//     let map = {}
//     while (stack.length) {
//         let cur = stack.pop()
//         map[cur.id] = cur.name
//         if (cur.children && cur.children.length > 0) {
//             stack.push(...cur.children)
//         }
//     }
//     console.log(map)
//     return map[id] ? map[id] : null
// }
// console.log(findNodeNameById(tree, 6))

const tree = {
    name: 'root',
    children: [
        { name: '叶子1-1' },
        { name: '叶子1-2' },
        {
            name: '叶子2-1',
            children: [
                {
                    name: '叶子3-1',
                    children: [
                        {
                            name: '叶子4-1',
                            children: [{}],
                        },
                    ],
                },
            ],
        },
    ],
}

// function getDepth(root) {
//     let stack = [root]
//     let maxDepth = 0
//     while (stack.length) {
//         let size = stack.length
//         maxDepth++

//         while (size--) {
//             let cur = stack.shift()
//             if (cur.children && cur.children.length > 0) {
//                 stack.push(...cur.children)
//             }
//         }
//     }
//     return maxDepth
// }

function getDepth(root) {
    let count = 1
    const dfs = (root) => {
        if (root.children && root.children.length > 0) {
            count++
            for (let item of root.children) {
                dfs(item)
            }
        }
    }
    dfs(root)
    return count
}
console.log(getDepth(tree))

function domJson2(obj) {
    let domobj = {}
    obj.name = obj.tag
    obj.children = []
    if (obj.children) {
        obj.childre.forEach((item) => {
            item.children.push(domJson2(item))
        })
    }
}
