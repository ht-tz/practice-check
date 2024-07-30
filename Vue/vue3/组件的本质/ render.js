// 组件就是一组dom元素的封装
function render(vnode,container) {
    // 说明vnode描述的是标签元素
    if(typeof vnode.tag =='string') {
        mountElement(vnode,container)
    } else if(typeof vnode.tag == "function") {
        // 说明vnode描述的是组件
        mountComponent(vnode,container)
    }
}

function mountComponent(vnode,container) {
     // 虚拟dom
    //调用组件函数，获取组件要渲染的内容
     //组件函数的本身，返回值就是要渲染的内容
    const subtree = vnode.tag()
    render(subtree,container)
}

function mountElement(vnode,container) {
     // 使用vnode.tag名称创建标签元素
    const el = document.createElement(vnode.tag)
    // 遍历props将属性，事件，添加到DOM元素
     for (const key of vnode.props) {
         if(/^on/.test(key)) {
            //以on 开头说明是事件
            el.addEventListener(key.substr(2).toLowerCase(),vnode.props[key],false)
         }    
     }
     // 处理children 
     if(typeof vnode.children === 'string') {
        //如果children 是字符串， 说明他是元素的文本子节点
        el.appendChild(document.createTextNode(vnode.children))
     } else if(Array.isArray(vnode.children)) {
        // 递归调用render渲染子节点，使用当前元素el作为挂再点
        vnode.children.forEach(child => render(child,el))
     }

     //将元素添加到挂在点下面
}

/*
 渲染器的作用在于把虚拟dom对象渲染为真实对象，工作原理是递归遍历虚拟dom，并且调用原生的API来完成真实dom的创建，渲染器的精髓在最后的更新
 */