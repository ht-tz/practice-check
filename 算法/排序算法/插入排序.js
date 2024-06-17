function insertSort(arr) {
    //1 后获取数组的长度
    let len = arr.length;

    // 外部循环，从第一个数开始获取数据，向前面局部开始有序插入
    for (let i = 1; i < len; i++) {

        //内层循环,获取i位置的元素，和前面的数据依次进行比较
        let cur = arr[i];
        let j = i
        // 一轮比较下来，最小值在最左边, 从i的位置开始取数据，依次和前面的数据进行比较
        while (arr[j - 1] > cur && j > 0) {
            arr[j] = arr[j - 1]
            j--
        }
        //将j位置的数据放置cur就可以了
        arr[j] = cur
    }
    return arr
}

let arr = [23, 13, 10, 76, 7, 4]
console.log(insertSort(arr));
