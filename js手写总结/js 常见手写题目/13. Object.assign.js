function objectAssign(target, ...sources) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    // 将目标对象转换为对象类型（在这里处理基本类型包装）
    let ret = Object(target)

    for (let i = 0; i < sources.length; i++) {
        let source = sources[i]
        if (source != null) {
            for (let key of source) {
                if (source.hasOwnProperty(key)) {
                    // 把睡醒的值赋值到目标对象上
                    ret[key] = source[key]
                }
            }
        }
    }
    return ret
}