var premute = function (nums) {
    let result = []
    let len = nums.length
    let used = new Array(len).fill(false)
    let path = []
    function backtracking(nums, used) {

        if (path.length === len) {
            result.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backtracking(nums, used)
            used[i] = false
            path.pop()
        }
    }

    backtracking(nums, used)
    return result
}
let arr = [1, 2, 3]
console.log(premute(arr))

let path = []
