function insertSort(array) {
    let len = array;
    for (let i = 1; i < len; i++) {
        let cur = array[i]
        let j = i
        //当前元素（后面的元素小于前一个元素，向前插入，一直找到前面元素没有比后面的大的元素为止
        while (array[j - 1] > cur && j > 0){
            array[j - 1] = array[j]
            j--
        }
        array[j] = cur
    }

    return array
}