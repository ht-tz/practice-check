function quicksort(arr, left, right) {
    console.log('数据处理觉得范围', arr.slice(left, right), 'left', left, 'right', right)
    if (left > right) return
    let base = arr[left]
    let i = left,
        j = right

    while (i !== j) {
        // 必须分放在前面
        while (arr[j] >= base && i < j) {
            j--
        }
        // 下一基准值 还必须小于j
        while (arr[i] <= base && i < j) {
            i++
        }

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        console.log('排序结束的分解值', arr, i, j)
    }
    // 相等，说明数据已经分好了 小 |（base） 大
    // 这时候应该把base放到中间 i的位置
    arr[left] = arr[i]
    arr[i] = base
    console.log("每次排序完的结果", `基准值index${i}-${left}`, arr)
    console.log("下一轮的基准值1111", `$left~${left}~~~right${i - 1}`)
    //  递归左子树
    quicksort(arr, left, i - 1)
    console.log("下一轮的基准值2222", `$left~${i + 1}~~~right${right}`)

    // 递归右子树
    quicksort(arr, i + 1, right)
}

function quickSortModule(arr) {
    quicksort(arr, 0, arr.length - 1)
    return arr
}

// 排序结束的分解值 [ 5, 4, 3, 2, 1 ] 4 4
// 每次排序完的结果 基准值index4-0 [ 1, 4, 3, 2, 5 ]
// 下一轮的基准值1111 $left~0~~~right3
// 数据处理觉得范围 [ 1, 4, 3 ] left 0 right 3
// 排序结束的分解值 [ 1, 4, 3, 2, 5 ] 1 1
// 每次排序完的结果 基准值index1-0 [ 4, 1, 3, 2, 5 ]
// 下一轮的基准值1111 $left~0~~~right0
// 数据处理觉得范围 [] left 0 right 0  // left >= right []
// 下一轮的基准值2222 $left~2~~~right3
// 数据处理觉得范围 [ 3 ] left 2 right 3
// 排序结束的分解值 [ 4, 1, 3, 2, 5 ] 3 3
// 每次排序完的结果 基准值index3-2 [ 4, 1, 2, 3, 5 ]
// 下一轮的基准值1111 $left~2~~~right2
// 数据处理觉得范围 [] left 2 right 2
// 下一轮的基准值2222 $left~4~~~right3
// 数据处理觉得范围 [] left 4 right 3
// 下一轮的基准值2222 $left~5~~~right4
// 数据处理觉得范围 [] left 5 right 4
//     [ 4, 1, 2, 3, 5 ]


console.log(quickSortModule([5, 4, 3, 2, 1]))