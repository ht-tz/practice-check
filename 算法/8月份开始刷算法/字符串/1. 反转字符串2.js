var reverseStr = function (s, k) {
    let arr = s.split("")
    let len = s.length
    for (let i = 0; i < len; i += 2 * k) {
          let l = i
         let r = Math.min(l+k - 1, len - 1)
          while (l < r) {
              let temp = arr[l]
              arr[l] = arr[r]
              arr[r] = temp
              l++
              r--
          }
    }
    return arr.join("")
}