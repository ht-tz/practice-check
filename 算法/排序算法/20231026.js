//插入排序
function insertSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let cur = arr[i]
        let j = i

        // 这个过程是将最小值移动到最左边
        while (arr[j - 1] > cur && j > 0) {
            arr[j] = arr[j - 1]
            j--
        }

        arr[j] = cur
    }
    return arr
}

let arr = [89, 22, 3, 45, 5]

console.log(insertSort(arr))