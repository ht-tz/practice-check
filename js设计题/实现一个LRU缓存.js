// lru 最近最少使用原则 
class LRUCache {
    constructor(limit) {
        this.limit = limit;
        let cache = new Map();
    }

    get(key) {
        // 没找到的化就是undefined
        if (!this.cache.has(key)) {
            return
        }
        // 获取元素
        const value = this.cache.get(key);
        // 删除元素
        this.cache.delete(key)
        // 重新元素插到最前面
        this.cache.set(key, value)
        // 返回获取的值
        return value
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)
        if(this.cache.size>this.limit) {
             this.cache.delete(this.cache.keys.next().value)
        }
    }
}

let map = new Map()
map.set('1',2)
map.set('2',1)
map.set('3',3)
// [Map Iterator] { '1', '2', '3' }, 从这里可以看出来最久没有使用的在最上面
console.log(map.keys().next().value) // 获取最早添加的key
key = map.keys().next().value