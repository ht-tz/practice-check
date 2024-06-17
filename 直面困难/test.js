function isSymmetry1(num) {
    let arr = num.toString().split("")
    if (arr.length === 1) return true
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        if (arr[l] === arr[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
}

function isSymmetry2(num) {
    let arr = num.toString().split("")
    let len = arr.length
    if (len < 2) return true
    let mid = Math.floor(len / 2)
    if (len % 2 !== 0) {
        arr.splice(mid, 1)
    }
    let m = arr.length / 2 - 1
    let n = m + 1
    while (m >= 0 && n <= arr.length - 1) {
        if (arr[m] !== arr[n]) {
            return false
        }
        n++
        m--
    }
    return true
}

function isSymmetry3(num) {
    let reverseOrder = ""
    let str = num.toString()
    for (let i = str.length - 1; i >= 0; i--) {
        reverseOrder += str[i]
    }
    if (str === reverseOrder) {
        return true
    }
    return false
}

const aSymmetryNumbers = (num) => {
    let res = []
    for (let i = 0; i < num; i++) {
        if (isSymmetry3(i)) {
            res.push(i)
        }
    }
    return res
}
console.log(aSymmetryNumbers(1000))     // console.log(isSymmetry3(1234564321))