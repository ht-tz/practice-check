function ArrayIs(array) {
    return Object.prototype.toString.call(array) === "[object Array]"
}

console.log(ArrayIs([]))