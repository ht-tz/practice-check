const myIndexOf = (str, searchValue, fromIndex) => {
    //找不到就是 - 1
    if (fromIndex < 0) {
        fromIndex = 0
    } else if (fromIndex >= str.length) {
        return -1
    }
    let searchLen = searchValue.length
    // 搜索的为空字符串返回 0
    if (searchLen == 0) return 0
    // 从fromIndex开始搜索发 为什么是 str.length - searchLen  最后搜索范围长度小于 searchLen 无意义，所以也算是一个小的优化
    for (let i = fromIndex; i <= str.length - searchLen; i++) {
        let found = true
        for (let j = 0; j < searchLen; j++) {
            if (str[i + j] !== searchValue[j]) {
                found = false
                break
            }
            if (found) {
                return i
            }
        }
    }
    return -1
}


console.log(myIndexOf('hello world', 'world', 0))

const indexOf1 = (s, searchValue) => {

    let sl = searchValue.length
    if (sl == 0) return -1

    for (let i = 0; i < s.length; i++) {
        if (s[i] === searchValue[0]) {
            let flag = true
            for (let j = 0; j < sl; j++) {
                if (s[i + j] !== searchValue[j]) {
                    flag = false
                    break
                }
                if (flag) {
                    return i
                }
            }
        }
    }
    return -1
}