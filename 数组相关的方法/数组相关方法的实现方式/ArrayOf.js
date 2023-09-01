console.log(Array.of(3).length)
console.log(Array.of(1,2,3,4))

function  ArrayOf() {
    return  [].slice.call(arguments)
}

console.log(ArrayOf(1))