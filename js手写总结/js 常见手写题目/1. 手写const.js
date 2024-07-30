/**
 * 实现const的关键在于Object.defineProperty()这个API，这个API用于在一个对象上增加或修改属性。通过配置属性描述符，可以精确地控制属性行为。Object.defineProperty() 接收三个参数：
 * Object.defineProperty(obj, prop, desc)
 * writable: false
 */

function _const (key,value) {
    const desc = {
        value,
        writable: false
    }

    Object.defineProperty(window, key, desc)
}

_const('obj', {a:1})
 obj.b = 2
 obj = {}