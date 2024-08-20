function hasCycle(obj) {
    const wet = new WeakSet()

    const detect = (obj) => {
        if (obj && typeof obj === 'object') {
            if (wet.has(obj)) {
                return true
            }
        }
        wet.add(obj)

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (detect(obj[key])) {
                    return true
                }
            }
        }
        return false
    }

    return detect(obj)
}