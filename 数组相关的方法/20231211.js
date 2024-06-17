function reverseStr(s) {
    let str = ""
    // for(let i = s.length - 1;i>=0;i--) {
    //     str+= s[i]
    // }
    let len = s.length
    while(len--) {
        str+= s[len]
    }
    return str
}
let str  ='zxcv'
console.log(reverseStr(str))