/**
 * 选择排序
 * 思路：
 * 1.定义一个min记录最小值索引，
 * 2.比较 array[min] > array[i] 如果 成立交换两者的值，更新min的值
 * 3.这个一轮走下来就会得到最小值
 * 4.第二轮拿第二个数开始比较依次类推。。。。
 */
function swap(array, min, j) {
    let temp = array[min];
    array[min] = array[j]
    array[j] = temp
}


function selectSort(array) {
    //只剩下一个的时候，就不需要在进行排序了，所以是length - 1
    //外层循环：从零的位置开始读取数据
    for (let j = 0; j < array.length - 1; j++) {
        let min = j;
        //循环体范式
        /*
        第一个数已经是0了，所以要从当前后面一个数依次往后找 所以是min+1
         */
        for (let i = min+1; i < array.length; i++) {
            if (array[min] > array[i]) {
                //更新min的值 走一轮找到最小值下表
                min = i;
            }
        }
        //循环结束，进行值的交换
        swap(array, min, j)
    }
    return array;
}

let array1 = [2, 13, 24, 3, 5, 4, 6544]
console.log(selectSort(array1))


