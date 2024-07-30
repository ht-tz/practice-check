const arr = [1, [1, 2], [1, 2, 3]]

function flat(arr) {
    let res = []
    for (let value of arr) {
        if (Array.isArray(value)) {
            res = res.concat(flat(value))
        } else {
            res.push(value)
        }
    }
    return res
}

console.log(flat(arr))

function flatten(array) {
    return array.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

function flatten(array) {
    while (array.some(el => Array.isArray(el))) {
        array = [].concat(...array)
    }
    return array
}