function isType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

function typeofw(obj) {
    let res = Object.prototype.toString.call(obj).split(" ")[1]
    res = res.substring(0, res.length - 1).toLowerCase()
    return res
}
console.log(typeofw({}));
console.log(typeofw([]));
console.log(typeofw(null));
console.log(typeofw(new Date()));