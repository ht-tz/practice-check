const obj = {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
        {
            id: 2,
            name: "部门2",
            pid: 1,
            children: []
        },
        {
            id: 3,
            name: "部门3",
            pid: 1,
            children: [
                {
                    id: 4,
                    name: "部门4",
                    pid: 3,
                    children: [
                        {
                            id: 5,
                            name: "部门5",
                            pid: 4,
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}

{
    function getNodeArray(obj) {
        let array = obj instanceof Array ? obj : [obj]
        let res = []
        array.forEach(item => {
            res.push(item)
            if (item.children && item.children.length > 0) {
                let data = getNodeArray(item.children)
                res.push(...data)
            }
            delete item.children
        })
        return res
    }

    // console.log(getNodeArray(obj))
}

{
    function getNodeArray(obj) {
        let stack = []
        const res = [];
        stack.push(obj)
        while (stack.length) {
            const item = stack[0]
            res.push(item)
            stack.shift()
            if (item.children && item.children.length > 0) {
                stack.push(...item.children)
            }
            delete item.children
        }
        return res
    }

    // console.log(getNodeArray(obj))

}

{
    function getNodeArray(obj) {
        let res = []
        let array = obj instanceof Array ? obj : [obj]
        for (const item of array) {
            res.push(item)
            if (item.children && item.children.length > 0) {
                res.push(...getNodeArray(item.children))
            }
            delete item.children
        }
        return res
    }

    let arr1 = getNodeArray(obj)
    console.log(arr1);
}