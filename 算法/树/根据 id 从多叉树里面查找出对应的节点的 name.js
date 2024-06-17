// 给定一个多叉树 tree 和一个节点的 ID id，编写一个函数 findNodeNameById，用于在多叉树中查找指定节点 ID 对应的节点名称。如果找到节点，则返回节点名称；如果未找到，则返回 null。

const tree = {
    name: "root",
    id: 1,
    children: [
        {
            name: "c1",
            id: 2,
            children: [
                {
                    name: "c11",
                    id: 3,
                    children: [],
                },
                {
                    name: "c12",
                    id: 4,
                    children: [],
                },
            ],
        },
        {
            name: "c2",
            id: 5,
            children: [
                {
                    name: "c21",
                    id: 6,
                    children: [],
                },
                {
                    name: "c22",
                    id: 7,
                    children: [],
                },
            ],
        },
    ],
};


function findNodeNameById(tree, id) {
    if (tree.id == id) return name
    let map = {}
    const dfs = (tree) => {
        map[tree.id] = tree.name
        if (tree.children?.length > 0) {
        }
        for (let item of tree.children) {
            dfs(item)
        }
    }
    dfs(tree)


    return map[id] ? map[id] : null;
}

function findNodeNameById(tree, id) {
    let name = null
    if (tree.id === id) return tree.name
    let stack = [tree]
    while (stack.length) {
        let size = stack.length
        while (size--) {
            let node = stack.pop()// 给定一个多叉树 tree 和一个节点的 ID id，编写一个函数 findNodeNameById，用于在多叉树中查找指定节点 ID 对应的节点名称。如果找到节点，则返回节点名称；如果未找到，则返回 null。

            const tree = {
                name: "root",
                id: 1,
                children: [
                    {
                        name: "c1",
                        id: 2,
                        children: [
                            {
                                name: "c11",
                                id: 3,
                                children: [],
                            },
                            {
                                name: "c12",
                                id: 4,
                                children: [],
                            },
                        ],
                    },
                    {
                        name: "c2",
                        id: 5,
                        children: [
                            {
                                name: "c21",
                                id: 6,
                                children: [],
                            },
                            {
                                name: "c22",
                                id: 7,
                                children: [],
                            },
                        ],
                    },
                ],
            };


            function findNodeNameById(tree, id) {
                if (tree.id == id) return name
                let map = {}
                const dfs = (tree) => {
                    map[tree.id] = tree.name
                    if (tree.children?.length > 0) {
                    }
                    for (let item of tree.children) {
                        dfs(item)
                    }
                }
                dfs(tree)


                return map[id] ? map[id] : null;
            }

            function findNodeNameById(tree, id) {
                let name = null
                if (tree.id === id) return tree.name
                let stack = [tree]
                while (stack.length) {
                    let size = stack.length
                    while (size--) {
                        let node = stack.pop()
                        if (node.id === id) return node.name
                        if (node.children?.length > 0) {
                            stack.push(...node.children)
                        }
                    }
                }
                return name
            }


            const nodeName = findNodeNameById(tree, 5);
            console.log(nodeName); // 'c11'
            if (node.id === id) return node.name
            if (node.children?.length > 0) {
                stack.push(...node.children)
            }
        }
    }
    return name
}


const nodeName = findNodeNameById(tree, 5);
console.log(nodeName); // 'c11'