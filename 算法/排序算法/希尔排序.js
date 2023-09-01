//希尔排序 插入排序的改进
//选择间隔依次排序，减小间隔再进行排序
// 原始增量n/2

function shellSort(arr) {
    // 获取初始数组的长度
    let len = arr.length

    //2. 初始化的增（gap -> 间隔）
    let gap = Math.floor(len / 2)
    //3. while循环（gap不断的进行减小）
    while (gap >= 1) {
        // 4.以gap为间隔，进行分组，进行局部插入排序
        for (let i = gap; i < len; i++) {
            let temp = arr[i]
            let j = i
            // 因为比较的是j - gap位置上的元素
            while (arr[j - gap] > temp && j > gap - 1) {
                // 将j位置的元素赋值，大的放在后面
                arr[j] = arr[j - gap]
                // 进行下一个分组的排序，此时的j = j-gap,j位置就是之前将- gap的位置
                j -= gap
            }
            //将j位置赋值为temp
            arr[j] = temp
        }
        // 此轮分组排序完毕，缩小分组
        gap  =Math.floor(gap/2)
    }
    return  arr
}

let a = [1,24,34,5,36,45,6,57,86]
console.log(shellSort(a))