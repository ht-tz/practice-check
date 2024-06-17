// 建立而为数组

let arr = new Array(4).fill([]).map(() => new Array(4).fill("."))
console.log(arr)

function isValid(n, row, col, arr) {
     //检查列有没有，
    for(let i = 0;i < row;i++) {
         if(arr[i][col] === "Q") {
             return false
         }
    }

    // x轴向右是正
    // y轴向下是正
    // 45度是左下

    for (let i = row - 1,j = col - 1; i >= 0 && j>=0;i--,j++) {
          if(arr[i][j] == "Q"){
              return false
          }
    }

    // 135度是斜着向上
    for(let i = row - 1,j = col +1;i>=0 &&j <n;i--,j++) {
        if(arr[i][j] == "Q"){
            return false
        }
    }

    return true
}


// 45度填充1234
// let x =4
// for (let i = 4 - 1, j = 4 - 1; i >= 0 && j >= 0; i--, j--) {
//     arr[i][j] = x--
// }
let y = 1

for (let  i  = 3, j = 0; i >=0 && j< 4 ; i--,j++) {
    arr[i][j] = y++
}
console.log(arr)