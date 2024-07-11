// 先遍历两个数数组，让挨着的两个进行比较， 如果后天的比前面的大，就把两个为位置交换
// 数据遍历一遍后， 最后一个数字就是最大的那个
// 然后遍历剩下的数组，重复上面的步骤，直到数组遍历完成
function swap(array, i) {
    let temp = null;
    temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
}

function bubble(array) {
    let length = array.length;
    for (let j = length - 1; j >= 0; j--) {
        let flag = true;
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i)
                flag = false;
            }
        }
        if (flag) break;
    }
    return array
}

let arr = [7, 65, 4, 3, 22, 100]
console.log(bubble(arr))
