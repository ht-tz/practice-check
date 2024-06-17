function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {
    // pivot 最后一个元素为基准元素
    let pivot = arr[end];
    let pIndex = start
    for (let i = start; i < end; i++) {
        //小于基准元素的话与基准元素交换位置
        if (arr[i] < pivot) {
            swap(arr, i, pIndex)
            pIndex++
        }
    }
    //把基准值放中间
    swap(arr, pIndex, end)
    return pIndex
}
function quickSort(arr, start, end) {

    if (start > end) {
        return
    }
    let midIndex = partition(arr, start, end)
    quickSort(arr, start, midIndex - 1)
    quickSort(arr, midIndex + 1, end)
}

let array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSort(array, 0, array.length - 1)

console.log(array)