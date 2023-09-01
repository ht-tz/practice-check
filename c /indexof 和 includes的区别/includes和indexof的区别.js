//indexof 和 includes的区别

//判断字符串和数字中是否存在响应的元素
//区别： includes能识别NaN
//indexOf 不能识别NaN undefined
// includes能识别稀疏数组中的undefined
//indexof识别不了


//字符串和数组中的indexof方法比较

//字符串和数组中的includes方法比较


{
    //数组返回值
    const res1  =[1,23,4,5,6].includes(5); //true
    const res2  =[1,23,4,5,6].indexOf(6); //number
    // console.log(res1,res2)
}


{
    /**
     * searchElement
     * 要查找的元素。
     *
     * fromIndex 可选
     * 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。
     * 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，
     * -2 表示从倒数第二个元素开始查找，以此类推。注意：如果参数中提供的索引值是一个负值，
     * 并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
     * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     * @type {number}
     */
    //indexof的第二个参数
    const res1  = [1,2,3,4,5].indexOf(2)
    // console.log(res1)
    //代表从1开始向后寻找 返回的数组下标为1
    const res2  = [1,2,3,4,5].indexOf(2,0)
    //-1 代表从5开始进行寻找
    const res3  = [1,2,3,4,5].indexOf(2,-1)
    console.log(res1,res3)
}

{
    //includes  第二个参数 formIndex
    /**
     * 从fromIndex 索引处开始查找 searchElement。
     * 如果为负值，则按升序从 array.length + fromIndex 的索引开始搜（
     * 即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
     * @type {boolean}
     */
     let flag = [1,2,3,4,5,90].includes(2,2)
    console.log(flag)
    // 从90 开始寻找
    let flag1 = [1,2,3,4,5,90].includes(2,-1)
    console.log(flag1)

    //如果 fromIndex 大于等于数组的长度，则将直接返回 false，且不搜索该数组。

    var arr = ['a', 'b', 'c'];

    arr.includes('c', 3);   // false
    arr.includes('c', 100); // false
    //如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。
    var arr = ['a', 'b', 'c'];

    arr.includes('a', -100); // true
    arr.includes('b', -100); // true
    arr.includes('c', -100); // true
    arr.includes('a', -2); // false
}