function numFormat (num) {
     let nums = num.toString().split('.');
     let num1 = nums[0].split("");
     let num2 = nums[1];
      let res = []
     num1 = num1.reverse();
    for (let i = 0; i <num1.length ; i++) {
         if (i%3 === 0 && i!==0) {
             res.push(',');
         }
         res.push(num1[i]);
    }
    let str = '';
    if (num2) {
        str = "."+num2;
    }

    res = res.reverse().join("")
    return res+str
}

console.log(numFormat(5656156165511))