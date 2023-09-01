function reserve(s, i, j) {
    let temp = s[i];
    s[i] = s[j]
    s[j] = temp
}

function reserveStr2(str, k) {
    let l;
    let r;
    let arr = str.split('');
    let len = arr.length
    let temp;
    for (let i = 0; i < len; i += 2 * k) {
        // 1. 每隔 2k 个字符的前 k 个字符进行反转
        // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
        // 3. 剩余字符串小于k个则全部反
        l = i
        // i是起始位置，i+k - 1 是否小于k 小于len则说明大于等于k， 否则就是不够k位了, 因为比较的是长度 所以小于等于len, 且包含最后一位
        r = (i + k - 1) < len? (i + k - 1) : (len - 1)
        while (l < r) {
            temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            l++
            r--
        }
    }
    return arr.join('')
}

console.log(reserveStr2('abcdefgo', 4))