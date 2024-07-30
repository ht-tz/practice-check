
/**
 * tag 用来描述标签名称
 *  props: 是一个对象， 用来描述div的标签属性, 事件等内容
 * children 用来描述标签的子节点
 * @param {*} vnode  虚拟dom对象
 * @param {*} container 挂载点 
 */
function renderer(vnode, container) {
    //vnode.tag作为标签名来创建DOM元素 
    const el = document.createElement(vnode.tagName);
    // 遍历vnode.tag 作为标签名称创建DOM元素
    for (const key in vnode.props) {
        if (/^on/.test(key)) {
            //如果key是以on开头，说明他是事件
            el.addEventListener(
                key.substr(2).toLowerCase(),  //事件名称 onClick --->click
                vnode.props[key] //事件处理函数
            )
        }
    }
    //children
    if (typeof vnode.children === "string") {
        // children 是字符串，说明他是元素的文本子节点
        el.appendChild(document.createTextNode(vnode.children))
    } else if (Array.isArray(vnode.children)) { 
        //递归调用renderer函数子节点，使用当前元素el作为挂载点
        vnode.children.forEach(child => renderer(child, el))
    }
    //将元添加到挂载点下的
    container.appendChild(el)
}