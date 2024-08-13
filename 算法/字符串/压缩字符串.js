//用行程长度编码（Run-Length Encoding）算法来压缩字符串
function compressString(str) {
    let compressed = ''
    let count = 1
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            count += 1
        } else {
            compressed += str[i - 1] + count
            count = 1
        }
    }
    compressed += str[str.length - 1] + count
    return compressed
}

console.log(compressString('aabbbcccc')) // "a2b3c4"
console.log(compressString('abc')) // "a1b1c1"
function compressString(str) {
    let nstr = ''
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] == str[i]) {
            count++
        } else {
            nstr += str[i - 1] + count
            count = 1
        }
    }
    nstr += str[str.length - 1] + count
    return nstr
}


// 还原被压缩的字符串
function decompressString(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            res += str[i - 1].repeat(str[i])
        }
    }
    return res
}

console.log(decompressString("a2b3c4")) // "aabbbcccc")

//全局函数 isNaN() 用于检查其参数是否是非数字值， 比较前会先转换为数字在进行判断
console.log(isNaN('a')) //true
console.log(Number.isNaN("a")) //false  更加的严格，不会进行类型转换

