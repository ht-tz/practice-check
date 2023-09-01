function removeExtraSpaces(strArr) {
    let slow = 0;
    let fast = 0;
    while (fast < strArr.length) {
        //判断  fast = 0  strArr[fast +1] === "" &&  strArr[fast] !==""
        if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
              fast++
        } else {
            strArr[slow++] = strArr[fast++]
        }
    }
    // 去除最后一位
    strArr.length = strArr[strArr.length - 1] === " " ? slow - 1 : slow;
}

function reverseWords(str) {
    let strArr = Array.from(str)
    //去除空格
    removeExtraSpaces(strArr)
    reserve(strArr, 0, strArr.length - 1)
    let start = 0;
    // 翻转单词
    for (let i = 0; i <= strArr.length; i++) {
        let cur = strArr[i]
        if (cur === " " ||  i === strArr.length) {
            reserve(strArr, start, i - 1)
            start = i + 1
        }
    }
    return strArr.join('')
}

function reserve(strArr, start, end) {
    let l = start;
    let temp
    let r = end
    while (l < r) {
        temp = strArr[l]
        strArr[l] = strArr[r]
        strArr[r] = temp
        l++;
        r--
    }
    // return arrStr
}

let str = "   the sky is blue   "

console.log(reverseWords(str))