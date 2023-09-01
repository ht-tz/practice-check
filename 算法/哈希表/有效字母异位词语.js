/**
 * 有效字母异位词
 */

function isAnagram(s,t) {
    if (s.length!==t.length) return false
    let smap = new Map()
    for (let i of s) {
        smap.set(i,(smap.get(i) || 0)+1)
    }
    for(let i of t) {
        if (!smap.get(i)) return false
       smap.set(i,smap.get(i) - 1)
    }
    return true
}