var repeatedSubstringPattern = function (s) {
    let str = ""
    let prefix = ""
    for (let i = 1; i < s.length; i++) {
        str = s.slice(0, i)
        if(len % str.length ===0) {
              prefix = s.replace(str, "")
              if(prefix === str) return true
        }
    }
    return false
}