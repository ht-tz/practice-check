function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        // 生成随机索引
        const j = Math.floor(Math.random() * i)//所及生成0，到i之间的索引
        // 交换元素
       let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

let arr  = [1,2,3,4,5,6]

let a = shuffleArray(arr)
console.log(a)