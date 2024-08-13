function compressString(str) {
    let nstr = ''
    let count = 1
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++
        } else {
            nstr += str[i - 1] + count
            count = 1
        }
    }
    nstr += str[str.length - 1] + count
    return nstr
}

console.log(compressString('aabcccccaaa')) // a2b1c5a3