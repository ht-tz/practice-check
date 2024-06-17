let str = {
    tag: 'DIV',
    children: [
        {
            tag: 'SPAN',
            children: [
                {tag: 'A', children: []}
            ]
        },
        {
            tag: 'SPAN',
            children: [
                {tag: 'A', children: []},
                {tag: 'A', children: []}
            ]
        }
    ]
}


function domJson2(obj) {
    let domObj = {}
    obj.name = obj.tag
    obj.children = []
    if(obj.children) {
           obj.children.forEach(item => {
               item.children.push(domJson2(item))
           })
    }

    return domObj
}

console.log(domJson2(str))