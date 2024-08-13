function myIndexOf(str, target, index) {
    if (index < 0) {
        index = 0
    } else if (index >= str.length) {
        return -1
    }

    let tlen = target.length
    if(tlen === 0) return 0
    for (let i = 0; i <= str.length - tlen; i++) {
         let found = true
        for (let j = 0; j <tlen; j++) {
            if(str[i +j] !== target[j]) {
                  found = false
                  break
            }
            if(found) {
                return i
            }
        }
    }

    return -1
}

console.log(myIndexOf('hello world', 'world', 0))