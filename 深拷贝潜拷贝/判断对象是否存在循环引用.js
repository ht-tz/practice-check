// 检测循环引用， 利用set数据结构，来跟踪是否访问过了，遍历过程中再次遇见说明就访问过
function hasCycle(obj, seen = new Set()) {
    // 不是对象或者null不存在循环引用 
    if (typeof obj !== 'object' || obj === null) return false

    if (seen.has(obj)) return true
    seen.add(obj)
    // 将对象添加到set中
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
             if(hasCycle(obj[key], seen)) return true
        }
    }
    // 检查完成删除当前对象，以便给其他分支进行处理 
    seen.delete(obj)
    return false
}


let obj  = {s:1}
 obj.a = {d:1}
obj.c =  obj
console.log(hasCycle(obj))