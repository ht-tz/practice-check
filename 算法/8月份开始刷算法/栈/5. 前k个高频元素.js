function topKFrequent(nums, k) {
    let res = [];
    let map = new Map();
    for (let n of nums) {
        let value = map.get(n) ? map.get(n) + 1 : 1;
        map.set(n, value);
    }
    let arr = [...map];
    arr.sort((a, b) => {
        return b[1] - a[1];
    });
    res = arr.slice(0, k).map((item) => {
        return item[0];
    });
    return res;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
