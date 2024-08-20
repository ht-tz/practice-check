function threeSum(arr) {
    let len = arr.length;
    if (len < 3) return [];
    arr.sort((a, b) => a - b);

    let res = []
    for (let i = 0; i < len - 2; i++) {
        if (arr[i] > 0) break
        if (i > 0 && arr[i] === arr[i - 1]) continue

        let left = i + 1
        let right = len - 1
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([arr[i], arr[left], arr[right]])
                while (left < right && arr[left] === arr[left + 1]) left++
                while (left < right && arr[right] === arr[right - 1]) right--
                left++
                right--
            }
        }
    }
    return res
}