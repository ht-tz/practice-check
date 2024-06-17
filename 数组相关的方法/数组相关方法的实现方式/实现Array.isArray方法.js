Array.isArray  = function (object) {
    return Object.prototype.toString.call(object) === '[object Array]'
}

console.log(Array.isArray([]))