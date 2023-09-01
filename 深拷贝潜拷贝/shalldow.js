function sholldow(target) {
    if (typeof target!=='object' && typeof target!==null) {
        let cloneTarget = Array.isArray(target)?[]:{}

        for (let key of target) {
            if (target.hasOwnProperty(key)) {
                cloneTarget[key] = target[key]
            }
        }

        return cloneTarget
    } else {
        return target
    }
}