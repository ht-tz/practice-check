// function reverseLeftWords(str, n) {
//     const len = str.length
//     let i = 0
//     while (i < len - n) {
//         str = str[len - 1] + str
//         i++
//     }
//     return str.slice(0, len)
// }
{
    function reverseLeftWords(str, n) {
        function reserve(strArr, start, end) {
            let temp
            while (start < end) {
                temp = strArr[start]
                strArr[start] = strArr[end]
                strArr[end] = temp
                start++
                end--
            }
        }

        let strArr = str.split('')
        let len = strArr.length

        reserve(strArr, 0, len - 1)
        reserve(strArr, 0, len - 1 - n)
        reserve(strArr, len - n, len - 1)
        console.log(strArr.join(''))
    }

    let str = '12345'
    reverseLeftWords(str, 2)
}

const re = (str) => {
    let l = 0
    let s = str.split('')
    let len = s.length
    let r = len - 1

    let temp
    while (l < r) {
        temp = s[l]
        s[l] = s[r]
        s[r] = temp
        l++
        r--
    }
    return s.join('')
}
console.log(re('12345'))
