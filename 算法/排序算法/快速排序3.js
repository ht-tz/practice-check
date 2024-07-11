function quicksort(arr) {
    const res = (arr) => {

        if (arr.length <= 1)
            return arr

        let left = []
        let right = []
        let mid = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[mid]) {

                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        console.log(left, mid,right)
        return [...res(left), mid, ...res(right)]
    }


    return res(arr)
}

console.log(quicksort([3, 2, 1, 5, 6, 4]))