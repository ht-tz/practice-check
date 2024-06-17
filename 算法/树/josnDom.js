/*
 * @Author: htz
 * @Date: 2024-06-16 16:39:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-16 16:44:53
 * @Description: 请填写简介
 */
const domtree = {
  tag: 'div',
  props: {
    id: 'myDiv',
    class: 'container',
  },
  children: [
    'Hello,',
    {
      tag: 'span',
      props: {
        style: 'color: blue;',
      },
      children: ['World!'],
    },
  ],
}

// 创建真实的DOM节点
const realDOM = json2dom(domtree)

// 将DOM节点添加到页面中
document.body.appendChild(realDOM)

function json2Dom(vnode) {
    // 如果是字符串，说明他是文本节点，直接创建文本并返回
    if(typeof vnode === "string") {
        return document.createTextNode(vnode)
    }
    // 否则为虚拟dom节点， 获取tag, props, children
    const { tag, props, children } = vnode s
    const elemnt = document.createElement(tag)
    // 遍历props，设置属性
    for (const item of Object.entries(props)) {
        let [key, value] = item
        element.setAttribute(key, value)
    }

    // 遍历children，创建子节点
    if(Array.isArray(children)) {
        for (const child of children) {
            element.appendChild(json2Dom(child))
        }
    }
    return element
}
