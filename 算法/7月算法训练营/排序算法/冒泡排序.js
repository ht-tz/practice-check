function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // 多少趟
        // 设置一个标志位，如果这一趟没有发生交换，则说明数组已经有序，直接结束
        let flag = true
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // 因为i个元素已经排序排好了
            // 。只要扫描到len - 1 - i 就行了
            // 因为i走一趟 后面有边界就缩一下
            // 元素两个两个交换， 如果前一个元素大于后一个元素，则交换 一轮排序后， 最大的元素在最后
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                // 发生了交换
                flag = false
            }
        }
        //这一趟没有进行排序 直接结束  说明数组已经是有序的了
        if (flag) {
            break
        }
    }
    return arr
}

let arr = [7, 65, 4, 3, 22, 100]
console.log(bubbleSort(arr))