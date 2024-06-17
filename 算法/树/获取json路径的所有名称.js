let json = {
    id: 1,
    children: [
        {id: 2, children: [{id: 3, children: []}]},
        {
            id: 4,
            children: [
                {id: 5, children: []},
                {id: 6, children: []},
            ],
        },
        {id: 7, children: []},
    ],
};

function getAllPath(root) {
    let res = []
    if (!root) return []
    const dfs = (node, path) => {
        if (!node.children || node.children.length === 0) {
            path += node.id
            res.push(path)
        }

        path += node.id + "->"
        for (let item of node.children) {
            dfs(item, path)
        }
    }
    dfs(root, "")
    return res
}

function getAllPath(root) {
    let res = []
    let stack = [{node: root, path: root.id}]
    while (stack.length) {
        let {node, path} = stack.pop()
        // 书写要注意， 分界点要尤其注意
        if (!node.children || node.children.length === 0) {
            // 收集数据
            res.push(path)
        }
        if (node.children?.length > 0) {
            for (let item of node.children) {
                let iobj = {node: item, path: path + '->' + item.id}
                stack.push(iobj)
            }
            console.log(stack)
        }
    }

    return res
}

console.log(getAllPath(json, 5)) // [1->4->5])