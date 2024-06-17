const arr = [
    { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
];
let obj = {}
arr.forEach(ele => obj[ele.id] = ele)
// console.log(obj)
// console.log(arr)

//树转数组
function arrayToTree1(array) {
    let parentList = [];
    let obj = {}
    arr.forEach(el => obj[el.id] = el)
    arr.forEach(el => {
        //找到el父元素
        const parent = obj[el.parentId];
        if (parent) {
            //初始化 存在parent.children返回该值，不存在就返回部门【】
            parent.children = parent.children || []
            parent.children.push(el)
        } else {
            //parent不存在就是根节点
            parentList.push(el)
        }
    })
    return parentList;
}



function arrayToTree(array) {
    let res = []
    let map = new Map()
    for (const item of array) {
        map.set(item.id, item)
    }
    console.log([...map])
    for (const item of array) {
        const parent = map.get(item.parentId)
        if (parent) {
            parent.children = parent.children || []
            parent.children.push(item)
        } else {
            res.push(item)
        }
    }
    return res
}
console.log(arrayToTree(arr))

