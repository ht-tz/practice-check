function mySubstring(str, start, end) {
    // null  undefined 0
    start = Math.max(0, start || 0)
    end = Math.min(str.length, end || str.length)

    // start > end交换
    if (start > end) {
        [start, end] = [end, start];
    }

    // 循环构建中字符串
    let res = ""
    for (let i = start; i < end; i++) {
        res += str[i]

    }
    return res
}

let str = "Hello, World!";
console.log(mySubstring(str, 7, 12)); // 输出: "World"
console.log(mySubstring(str, 7));     // 输出: "World!"
console.log(mySubstring(str, 12, 7)); // 输出: "World"