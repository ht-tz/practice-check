let ary = [1, 2, [3, 4], [5, [6, 7]]]

{
    //第一种
    function flatten1(array) {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                arr = arr.concat(flatten1(array[i]))
            } else {
                arr.push(array[i])
            }
        }
        return arr;
    }

    console.log(flatten1(ary));
}

{
    //reduce实现数组扁平化 
    function flatten(array) {
        return array.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
        }, [])
    }
    console.log(flatten(ary))
}

{
    function flatten(array) {
        while(array.some(el=>Array.isArray(el))) {
            array = [].concat(...array)
        }
        return array
    }
    console.log(flatten(ary))
}

{
     //api
    console.log(ary.flat(Infinity))
    //稀疏数组使用会删除空槽
    const array2 = [1, , 3, ["a", , ["d", , "e"]]];
    console.log(array2.flat())
    console.log(array2.flat(2))
}