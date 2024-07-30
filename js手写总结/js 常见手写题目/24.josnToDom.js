function render(obj) {
    let dom = document.createElement(obj.tag)
    obj.attrs &&
        Object.keys(obj.attrs).forEach((key) => {
            dom.setAttribute(key, obj.attrs[key])
        })
    obj.children &&
        obj.children.forEach((item) => {
            dom.appendChild(render(item))
        })
    return dom
}

let obj = {
    tag: 'DIV',
    attrs: {
        id: 'app',
    },
    children: [
        {
            tag: 'SPAN',
            children: [{ tag: 'A', children: [] }],
        },
        {
            tag: 'SPAN',
            children: [
                { tag: 'A', children: [] },
                { tag: 'A', children: [] },
            ],
        },
    ],
}

console.log(render(obj))
