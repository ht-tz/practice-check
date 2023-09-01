//二分搜索优化
//左闭右闭区间
function Binary(array, element) {
    let minIndex = 0;
    let maxIndex = array.length - 1
    let testElement;
    while (minIndex <= maxIndex) {
        let mid = Math.floor((minIndex + maxIndex) / 2)
        testElement = array[mid]

        if (testElement < element) {
            minIndex = mid + 1
        } else if (testElement > element) {
            maxIndex = mid - 1
        }
    }

    return -1

}

//左闭右开区间， 不包包含边界
function binarySearch(arr, target) {
    let left = 0;
    let mid = 0
    let right = arr.length; //细节1

    while (left < right) {
        mid = left + ((right - left) >> 1)
        if (arr[mid] > target) {
            //右边界本来取不到
            right = mid
        } else if (arr[mid] < target) {
            //mid 不是要找的元素 所以要向右移动 left = mid+1
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}


let example = [1, 3, 5, 57, 97,756]
let res = binarySearch(example, 67);


console.log(res)