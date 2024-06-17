function topKFrequent(nums, k) {
    let res = []
    let map = new Map()
    for (let n of nums) {
        let value = map.get(n) ? map.get(n) + 1 : 1
        map.set(n, value)
    }

    let arr = Array.from(map)
    arr.sort((a, b) => b[1] - a[1])
    res = arr.slice(0, k).map(item => item[0])
    return res
}