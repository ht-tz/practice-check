// 记录函数副作用
let activeEffect;
// 存储函数副作用的桶
const bucket = new WeakMap()
let bucket = new WeakMap()
const obj = new Proxy(data, {
    get(target, key) {

        //不存在effect直接return
        if (!activeEffect) return
        //根据桶中取出depsMap,他也是一个Map的类型：key---effects
        let depsMap = bucket.get(target)
        // 不存在的化,创建一个新的Map与之关联
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()))
        }
        //在根据key从depsMap中取得deps，他是一个set类型
        // 里面存储与当前key相关的副作用函数， effets
        let deps = depsMap.get(key)
        if (!deps) {
            //不存在的化 新建一个Set与key相关
            //里面存储中与当前key相关的的所有副作用函数 effects
            deps.set(key, (deps = new Set))
        }
        // 将激活的副作用函数添加到同桶里面
        deps.set(activeEffect)
        // 返回属性值
        return target[key]
    },
    set(target, key, newValue, receiver) {
        //设置属性值
        target[key] = newValue
        //根据target取出desMap
        const depsMap = bucket.get(target)
        if (!depsMap) return
        // 获取所有的副作用函数
        const effects = depsMap.get(key)
        // 执行副作用函数
         effects.forEach(fn=>fn())
    }
})