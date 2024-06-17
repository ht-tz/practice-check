// function isAnagram(s, t) {
//     let i = s.length
//     let j = t.length
//     if (i !== j) return false
//     let record = new Array(26).fill(0)
//     let base = 'a'.charCodeAt()
//     for (let k of s) {
//         record[k.charCodeAt() - base]++
//     }
//
//     for (let k of t) {
//         if (!(record[k.charCodeAt() - base])) return false
//         record[k.charCodeAt() - base]--
//     }
//
//     return true
// }
//
// // 个数相同字母
// // 长度相同
//
//
// function isAnagram1(s, t) {
//     let i = s.length
//     let j = t.length
//     if (i !== j) return false
//     let map = new Map()
//     for (let k of s) {
//         map.set(k, map.get(k) + 1 || 1)
//     }
//     for (let k of t) {
//         if (!map.has(k)) return false
//         map.set(k, map.get(k) - 1)
//     }
//     return true
// }
//
function intersection(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr = []


    for (let v of set1) {
        if (set2.has(v)) {
            arr.push(v)
        }
    }
    return arr
}

let nums1 = [4,9,5]
let nums2 = [9, 4,9,8,4]
console.log(intersection(nums1, nums2))