function reserveString(s) {
    let len = s.length;
    let l  = 0
    let r = len - 1
    let temp;
    while (l < r) {
         temp = s[l]
         s[l] = s[r] 
         s[r] = temp  

         
         l++;
         r--
    }
    return s
 }

  let str =["h","e","l","l","o"]

   console.log(reserveString(str));