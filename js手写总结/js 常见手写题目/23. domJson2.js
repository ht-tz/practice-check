function dom2JSON(domTree) {
    let obj = {}
    obj.name = domTree.tagName
    obj.children = []
    domTree.childNodes.forEach((item) => {
        obj.children.push(dom2JSON(item))
    })
    return obj
}
