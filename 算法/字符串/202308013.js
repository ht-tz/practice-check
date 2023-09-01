function reserve(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}

function reverse2(str, k) {
    let l;
    let r;
    let arr = str.split('')
    let len = arr.length

    for (let i = 0; i < len; i += 2 * k) {
        l = i
        r = i + k - 1 > len ? len - 1 : i + k - 1
        while (l < r) {
            reserve(arr, l, r)
            l++;
            r--;
        }
    }
    return arr.join('')
}


let str = 'abcdefg';
console.log(reverse2(str, 2))