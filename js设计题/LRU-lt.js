/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1
    let value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //先判断有没有，有的话先删
    if (this.cache.has(key)) {
        this.cache.delete(key)
    }
    //先删除在设置
    this.cache.set(key, value)
    //判断是否超出范围, 删粗最久没有使用的
    if (this.cache.size > this.capacity) {
        //获取最久没使用的key
        let key = this.cache.keys().next().value
        this.cache.delete(key)
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */