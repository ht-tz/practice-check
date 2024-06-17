function generateMatrix(n) {
    if (n < 1) return []

    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    // 循环几圈
    let loop = Math.floor(n / 2)
    let mid = Math.floor(n / 2)
    let count = 1

    let offset = 1
    let startY = 0
    let startX = 0

    while (loop--) {
        let row = startX
        let col = startY
        for (; col < n - offset; col++) {
            res[row][col] = count++
        }
        for (; row < n - offset; row++) {
            res[row][col] = count++
        }

        for(; col>startX; col--) {
            res[row][col] = count++
        }

        for(; row>startY; row--) {
            res[row][col] = count++

        }

        startX++
        startY++
        offset++
    }


    if(n%2 === 1) {
        res[mid][mid] = count++
    }

    return res
}

console.log(generateMatrix(4))