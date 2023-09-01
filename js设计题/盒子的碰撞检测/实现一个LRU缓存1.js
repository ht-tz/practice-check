/**
 手写LRU算法 支持get数据获取 和 put数据写入
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 进阶:
你是否可以在 O(1) 时间复杂度内完成这两种操作？

 */

 
// 1. map对象，在迭代的时候，会根据对象中的元素插入顺序来进行，新添加的元素的会被添加到末尾， 整个倒序查看

class LRUCache {
     constructor(limit) {
        this.limit = limit
        this.cache = new Map()
     }

     //首先从map对象里面拿出来，先删除， 再从新插入， 确保该条数据移动到最前面
    get(key){
        //若数据没找到的话undefined
        if(!this.cache.has(key)) {
            return undefined
        }

        //获取元素
        const value = this.cache.get(key)
        // 删除元素
        this.cache.delete(key)
        // 重新将元素插入到最前前面
        this.cache.set(key, value)
        //返回获取的值
        return value
    }
    put(key,value) {
        //有的话就删除，重新放置到最前面
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)
        // 超出容量删除最久的元素
        if(this.cache.size>this.limit) {
            //删除map最老的元素, 最新的数据在末尾
             this.cache.delete(this.cache.keys().next().value)
        }
    }
}