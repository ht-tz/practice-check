function quickSort(arr, l, r) {
    if (l > r) return

    let base = arr[l],
        i = l,
        j = r

    // i和j没有相遇的情况
    while (i !== j) {
        //大于基准值 向左边移动
        while (arr[j] >= base && i < j) {
            j--
        }
        //小于基准值向右边移动
        while (arr[i] <= base && i < j) {
            i++
        }
        //
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    //相等之后, 交换基准元素和相遇位置的元素 i 
    //基准位置等于相遇元素
    arr[l] = arr[i]
    ///相遇位置等于基元素
    arr[i] = base;

    //左边都小于arr[i]
    //右边都大于arr[i]
    quickSort(arr, l, i - 1)
    quickSort(arr, i + 1, r)

}

let array = [3, 2, 1, 5, 6, 4]
quickSort(array, 0, array.length - 1)
console.log(array);