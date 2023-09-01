
let strs = ["eat","eat"]



for (let i = 0; i <strs.length ; i++) {
    let countArray = new Array(26).fill(0)
    //遍历所有的字符串统计单词出现的次数
    for (let j = 0; j < strs[i].length; j++) {
        // 统计一个字母出现的次数
         // - 97 是a-z对应字母的顺序 统计各个字母出现的次数 比如由abc，和cab 对应形成的key是一样的，所一key为countArray，value对应的个数
         //如为undefined 说明要新增一组数据，下次循环进来，key存在，外层数据push
        countArray[(strs[i].charCodeAt(j) - 97)]++
    }
    console.log(countArray.toString())
}
