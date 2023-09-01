const generateMatrix = function (n) {
    let startX = 0
    let startY = 0
    let loop = Math.floor(n / 2)
    let mid = Math.floor(n / 2)

    let offset = 1

    let count = 1
    let nums = new Array(n).fill(0).map(() => new Array(n).fill(0))

    while (loop--) {
        let row = startX
        let col = startY
        for (; col < n - offset; col++) {
            nums[row][col] = count++
        }
        for (; row < n - offset; row++) {
            nums[row][col] = count++
        }
        for (; col > startX; col--) {
            nums[row][col] = count++
        }

        for (; row > startY; row--) {
            nums[row][col] = count++
        }
        startX++
        startY++
        offset += 1
    }

    if (n % 2 === 1) {
        nums[mid][mid] = count++
    }
    return nums
}
console.log(generateMatrix(3))