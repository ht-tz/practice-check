var isAnagram = function (s, t) {
     let map = new Map()
     if(s.length !== t.length) return false
     for(let i = 0; i < s.length; i++) {
          if(map.has(s[i])) {
               map.set(s[i], map.get(s[i]) + 1)
          } else {
               map.set(s[i], 1)
          }
     }
     for(let i = 0; i < t.length; i++) {
         if(map.get(t[i])) {
             map.set(t[i], map.get(t[i]) - 1)
         } else {
             return false
         }
     }

      return t
}