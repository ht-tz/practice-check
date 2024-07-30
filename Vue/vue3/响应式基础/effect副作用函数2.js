// 记录函数副作用
let activeEffect;
const effectsStack = []
function  effect(fn) {
    //使用一个副作用函数的栈，在副作用行数执行时 ，将当前副作用函数加入栈，带副作用函数执行完毕后，
    // 在从栈中将其弹出，并始终让activeEffect指向栈顶的副作用函数，这样就能做到一个响应式数据只会收集直接读取其值的副作用函数
    const effectFn = ()=>{
        // 调用cleanup函数完成清除工作
        cleanup(effectFn)
         // effectFn执行时，将它设置为当前激活的副作用函数
        activeEffect = effectFn
        // 调用副作用函数之前，将它压入栈
        effectsStack.push(effectFn)
        fn()
        //在当前副作用函数执行完毕后弹出来， 把activeEffect还原为之前的值
        effectsStack.pop()
        activeEffect = effectsStack[effectsStack.length - 1]
    }
    //用来存储所有与副作用相关联的依赖集合
    effectFn.deps = []
    //执行符副作用函数
    effectFn()
}
function  cleanup(effectFn) {
     // 遍历activeEffect.deps[]
    for (let i = 0; i <effectFn.deps.length ; i++) {
        //deps是依赖集合
        const deps = effectFn.deps[i]
        //将effectFn、从依赖集合中删除
         deps.delete(effectFn)
    }
    //重置
    effectFn.deps.length = 0
}
// 存储函数副作用的桶
const bucket = new WeakMap()
let bucket = new WeakMap()

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        // 返回属性值
        return target[key]
    },
    set(target, key, newValue, receiver) {
        //设置属性值
        target[key] = newValue
        // 取出副作用函数并执行
        trigger(target, key)
    }
})

function trigger(target, key) {
    //根据target取出desMap
    const depsMap = bucket.get(target)
    if (!depsMap) return
    // 获取所有的副作用函数
    const effects = depsMap.get(key)
    // 执行副作用函数
    // effects.forEach(fn => fn())
    // 避免死循环
    let effectsToRun = new Set(effects)

    //如果trigger触发执行的副作用函数与当前正在执行的副作用函数是同一个的化则不执行
    effects & effects.forEach(effectFn =>{
        if (activeEffect !== effectFn) {
             effectsToRun.add(effectFn)
        }
    })
    effectsToRun.forEach(effectFn=>effectFn())
}


//拦截函数内部的调用，track追踪函数的变化，
function track(target, key) {
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
    // 将激活的副作用函数添加到依赖集合deps中
    deps.set(activeEffect)
    //deps是与当前副作用函数关联的依赖集合
    activeEffect.deps.push(deps) //新增
}