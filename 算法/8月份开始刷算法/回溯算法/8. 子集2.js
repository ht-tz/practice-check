var subsetsWithDup = function (nums) {
        let len = nums.length
        nums.sort((a, b) => a - b)
        let path = []
        let res = []
        // 来记录已经使用过的元素
        let used = new Array(len).fill(false)
        const backtracking = (startIndex, used) => {
            // 判断一下startInde>= len
            res.push([...path])
            if (startIndex >= len) return
            //取每一层的数据
            for (let i = startIndex; i < len; i++) {
                if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
                used[i] = true
                path.push(nums[i])
                backtracking(i + 1, used)
                path.pop()
                used[i] = false
            }
        }
        backtracking(0, used)
        return res
    }
    