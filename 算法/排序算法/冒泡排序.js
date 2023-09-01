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