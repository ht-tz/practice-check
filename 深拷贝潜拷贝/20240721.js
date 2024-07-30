function shallowCopy(obj) {
    let newObj = {}
    if (typeof obj !== 'object' && typeof target !== null) {
        for (let key of obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] instanceof Object) {
                    newObj[key] = obj[key]
                } else {
                    newObj[key] = obj[key]
                }
            }
        }
    } else {
        target
    }

    return newObj
}

function deepClone(obj) {}
