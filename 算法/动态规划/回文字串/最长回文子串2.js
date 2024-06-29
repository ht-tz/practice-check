function isPalindromeSuseq(s, left, right) {

    while (left < right) {
        if (s[left] !== s[right]) {

            return false
        }
        left++
        right--

    }
    return true
}

function isP2(s) {
    let len = s.length
    if (len < 2) {
        return s
    }
    let maxlen = 1
    let begin = 0

    let arr = s.split('')
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxlen && isPalindromeSuseq(arr, i, j)) {
                maxlen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxlen)
}
