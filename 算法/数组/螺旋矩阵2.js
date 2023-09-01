function generateMatrix(n) {
     let startX = 0; //定义每一圈的起始位置
     let startY = 0; //定义每一圈的起始位置
    let loop = Math.floor(n/2) //浮点数向下取证 //起始位置旋转圈数，每一圈循环几次
    let mid  = Math.floor(n/2)
    let offset = 1; // 控制每一条边，遍历额长度，没一次循环右边界收缩一位
    let count = 1; // 更新填充数字
     let res = new Array(n).fill(0).map(()=>new Array(n).fill(0)) // 创建一个二维数组

    while(loop--) {
         //行
          let row = startX;
          //列
          let col = startY;

          //上行从左到右（左闭右开）
          for (;col<n - offset;col++ ) {
              res[row][col] =  count++
          }
          //右列，从上到下（上闭下开）
        for (;row<n - offset;row++) {
             res[row][col] = count++
        }

        // 下列 从右到左 右闭左开
        for (;col>startY;col--) {
            res[row][col] = count++
        }

        //左列 从下上
        for(;row>startX;row--) {
            res[row][col] = count++
        }

        //更新起始位置，从第二圈开始，各自的起始位置要加1，第一圈的起始位置位置是（1，1）第二圈的起始位置是（2，2）
        startX++
        startY++


         //更新offset，控制每一圈，每一条边遍历的长度
        offset +=1;
    }

    // 如果n为基数的情况下，需要给n单独赋值

    if (n%2 == 1) {
        res[mid][mid] = count
    }
    return res;
}

let start = 0;


console.log(generateMatrix(3))