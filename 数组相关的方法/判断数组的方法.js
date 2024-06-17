let arr = [1]
console.log(Array.isArray(arr))

console.log(arr instanceof Array)
console.log(arr.constructor === Array)
console.log(Object.prototype.toString.call(arr) === "[object Array]")
console.log(Object.prototype.toString.call(arr).slice(8, -1) === "Array")