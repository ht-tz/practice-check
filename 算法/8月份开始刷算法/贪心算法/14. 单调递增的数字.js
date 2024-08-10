var monotoneIncreasingDigits = function (n) {
    let str = n.toString()
    let arr = str.split('').map(v => parseInt(v))
    let len = arr.length
    let flag = len
    for (let i = len - 1; i > 0; i--) {
        //  i- 1 是正向放入pre  前一个大于后一个 前一个--
        if (arr[i - 1] > arr[i]) {
            arr[i -1]--
            flag = i
        }
    }
    for (let i = flag; i <len; i++) {
            arr[i] = 9
    }
    return arr.join('')
}
console.log(monotoneIncreasingDigits(332))