var lengthOfLongestSubstring = function (s) {
  let i = 0
  let arr = []
  let max = 0
  while (i < s.length) {
    const index = arr.indexOf(s[i])
    if (index > -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s[i])
    i++
    max = Math.max(arr.length, max)
  }
  return max
}

let s = 'vdfv'
console.log(lengthOfLongestSubstring(s))
