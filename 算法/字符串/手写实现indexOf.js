function myIndexOf(str1, str2) {
    let len = str1.length

    for (let i = 0; i < len; i++) {
        if (str1[i] === str2[0]) {
            let flag = true
            let j = 0
            while (j < str2.length) {
                if (str1[j + i] !== str2[j]) {
                    flag = false
                    break
                }
                j++
            }
            if (flag) {
                return i
            }
        }
    }
    return -1
}
console.log(myIndexOf('degf', 'gf'))
