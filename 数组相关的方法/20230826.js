// //树的拍平
// const obj = {
//     id: 1,
//     name: "部门1",
//     pid: 0,
//     children: [
//         {
//             id: 2,
//             name: "部门2",
//             pid: 1,
//             children: []
//         },
//         {
//             id: 3,
//             name: "部门3",
//             pid: 1,
//             children: [
//                 {
//                     id: 4,
//                     name: "部门4",
//                     pid: 3,
//                     children: [
//                         {
//                             id: 5,
//                             name: "部门5",
//                             pid: 4,
//                             children: []
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }
// {
//     function getTreeArray(obj) {
//         let arr = []
//         arr = obj instanceof Array ? obj : [obj]
//         arr.forEach(item => {
//             if (item.children && item.children.length > 0) {
//                 let data = getTreeArray(item.children)
//                 arr.push(...data)
//             }
//             delete item.children
//         })
//         return arr
//     }
//     // console.log(getTreeArray(obj));
// }

// {
//     //利用栈

//     function getTreeArray(obj) {
//         let stack = [obj]
//         let arr = []
//         while (stack.length) {
//             let data = stack.shift()
//             arr.push(data)
//             if (data.children && data.children.length > 0) {
//                 stack.push(...data.children)
//             }
//             delete data.children
//         }
//         return arr;
//     }
//     console.log(getTreeArray(obj));

// }


const arr1 = [
    { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
];


function getTreeData(arr) {
    let list = [];
    let obj = {};
    arr.forEach(el => obj[el.id] = el);
    arr.forEach(el => {
        // 找出元素的父集
        const parent = obj[el.parentId]
        if (parent) {
            parent.children = parent.children || []
            parent.children.push(el)
        } else {
            list.push(el)
        }
    })
    return JSON.stringify(list)
}



console.log(getTreeData(arr1))