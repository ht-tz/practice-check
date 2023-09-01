///螺旋数组2
function generateMatrix(n) {
    let startY = 0
    let startX = 0;
    let mid = Math.floor(n / 2);
    //circle count
    let loop = Math.floor(n / 2)
    // 补充各个位置上的元素
    let count = 1
    //创建一个二维数组
    let arr = new Array(n).fill(0).map(el => new Array(n).fill(0))
    let offset = 1
    while (loop--) {
        let col = startY
        let row = startX
        //l- r
        for (; col < startX + n - offset; col++) {
            arr[row][col] = count++
        }

        for (; row < startY + n - offset; row++) {
            arr[row][col] = count++
        }

        for (; col > startX; col--) {
            arr[row][col] = count++
        }
        for (; row > startY; row--) {
            arr[row][col] = count++
        }
        startX++
        startY++

        offset += 2
        //一轮循环结束
        if (n % 2) {
            arr[mid][mid] = count++
        }
    }
    return arr
}
console.log(generateMatrix(4))
// let arr = new Array(3).fill(0).map(el => new Array(3).fill(0))
// console.log(arr)