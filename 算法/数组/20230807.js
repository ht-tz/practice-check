{
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
            // left->right
            for (; col < n - offset; col++) {
                nums[row][col] = count++
            }
            // top->bottom
            for (; row < n - offset; row++) {
                nums[row][col] = count++
            }
            // right->left
            for (; col > startX; col--) {
                nums[row][col] = count++
            }
            // bottom->top
            for (; row > startY; row--) {
                nums[row][col] = count++
            }

            startX++
            startY++
            offset += 1
        }

        if (n % 2 === 1) {
            //奇数
            nums[mid][mid] = count
        }
        return nums
    }
    console.log(generateMatrix(3))

}

{
    //移除元素
    const  removeElement = function (n,arr) {
         let slow = 0
        for (let fast= 0; fast <arr.length; fast++) {
            if (arr[fast] !== n) {
                 arr[slow] = arr[fast]
                 slow++
            }
        }
        return slow
    }

    let a = [1,23,3,4,6,55]

    console.log(removeElement(3,a))
}