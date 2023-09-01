// lru 最近最少使用原则 
class LRUCache {
    constructor(limit) {
        this.limit = limit;
        let cache = new Map();
    }

     get(key) {
         if(!cache.has(key)) {
            return 
         }
         const value = cache.get(key);
         this.cache.delete(key)
         this.cache.set(key, value)
         return value
     }
     put(key, value) {
        if(this.cache.has(key)) this.delete(key) 
        else if (this.cache.size>=limit) {

            this.cache.delete(this.cache.keys().next().value)

        }
        this.cache.set(key, value)
     }
}