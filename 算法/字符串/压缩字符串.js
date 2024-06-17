//用行程长度编码（Run-Length Encoding）算法来压缩字符串
function compressString(str) {
    let compressed = ""
    let count = 1
    for (let i = 1; i < str.length; i++) {
           if(str[i -1] === str[i]) {
                count +=1
           } else {
               compressed += str[i -1] + count
                count = 1
           }
    }
    compressed += str[str.length - 1] + count
    return compressed
}

console.log(compressString('aabbbcccc')); // "a2b3c4"
console.log(compressString('abc')); // "a1b1c1"
