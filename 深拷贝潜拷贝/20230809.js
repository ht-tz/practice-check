{
    const isObeject = (value) => {
        const type = typeof value;
        return (value !== null) && (type === 'object' || type === 'function')
    }

    function deepClone(obj, map = new WeakMap()) {
        if (obj instanceof Set) {
            return new Set([...obj])
        }

        if (obj instanceof Map) {
            return new Map([...obj])
        }
        if (obj instanceof Date) {
            return new Date(obj)
        }
        if (obj instanceof RegExp) {
            return new RegExp(obj)
        }

        if (typeof obj === 'symbol') {
            return Symbol(obj.description)
        }

        if(typeof obj === 'function') {
            return obj
        }
        if (!isObeject(obj)) {
            return obj
        }

        if (map.has(obj)) {
            return map.get(obj)
        }

        const newObj = Array.isArray(obj) ? [] : {}

        map.set(obj, newObj)
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key], map)
            }
        }

        //对symbol特殊处理
        const symbols = Object.getOwnPropertySymbols(obj)
        for (let key of symbols) {
            newObj[key] = deepClone(obj[key], map)
        }

        return newObj
    }

    //    测试代码
    let s1 = Symbol("aaa")
    let s2 = Symbol("bbb")

    const obj = {
        name: "why",
        age: 18,
        friend: {
            name: "james",
            address: {
                city: "广州"
            }
        },
        // 数组类型
        hobbies: ["abc", "cba", "nba"],
        // 函数类型
        foo: function (m, n) {
            console.log("foo function")
            console.log("100代码逻辑")
            return 123
        },
        // Symbol作为key和value
        [s1]: "abc",
        s2: s2,
        // Set/Map
        set: new Set(["aaa", "bbb", "ccc"]),
        map: new Map([["aaa", "abc"], ["bbb", "cba"]])
    }

    obj.info = obj

    const newObj = deepClone(obj)
    console.log(newObj === obj)

    obj.friend.name = "kobe"
    obj.friend.address.city = "成都"
    console.log(newObj)
    console.log(newObj.s2 === obj.s2)

    console.log(newObj.info.info.info)

}