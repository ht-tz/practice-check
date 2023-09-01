function canConstruct (ransomNote, magazine) {
    const strArr =new Array(26).fill(26)
    let  base = "a".charCodeAt()

    for (let i = 0; i <magazine.length; i++) {
        strArr[magazine[i].charCodeAt() - base] ++
    }

    for (let i = 0; i <ransomNote.length ; i++) {
        let index  = ransomNote[i].charCodeAt() - base;
        if(!strArr[index]) return false
        strArr[index] --
    }
    return true
}