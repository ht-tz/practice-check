let str32 = ['zm', 'za', 'b', 'lm', 'ln', 'k']

function formatArrayToObject(arr) {
    let len = arr.length
    let map = new Map()
    for (let value of arr) {
        if (map.has(value[0])) {
            map.get(value[0]).push(value)
        } else {
            map.set(value[0], [value])
        }
    }
    let obj = {}
    for (let [key, value] of map) {
        console.log(key, value)
        obj[key] = value
    }

    return obj
}

console.log(formatArrayToObject(str32))