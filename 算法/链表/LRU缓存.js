class LRU {
    constructor(max) {
        this.max = max
        this.cache = new Map()
    }

    get(key) {
        if (this.cache.has(key)) {
            let value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
        }
        return -1
    }

    push(key, value) {
        if (this.cache.has(key)) {
            let value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            this.cache.set(key, value)
            if (this.cache.size > this.max) {
                let key = this.cache.keys().next().value
                this.cache.delete(key)
            }
        }
    }
}
