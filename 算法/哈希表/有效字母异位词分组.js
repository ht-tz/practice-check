/**
 * 技术法实现
 * @param strs
 */
function groupAnagrams(strs) {
    let  array = []
    let map  = new Map()
    //遍历字符数组
    for(let i = 0;i<strs.length;i++) {
        //前置知识 a-z 对应数字0 - 25 a.charCodeAt() - 97就像当字母对应的索引值 也就是0  z的话就是25
        // 位每一个字符串新建一个数组。数组的toString()值作为map的key value就是array每一项的长度
        let keyArr = new Array(26).fill(0)

        for(let j = 0;j<strs[i].length;j++) {
            keyArr[(strs[i].charCodeAt(j)) - 97]++
        }
        // 一个不同字母组成的字符串，字符串的各个成员不同的排列组合成的k相同
        let key = keyArr.toString();
        //判断value是否存在
        let value = map.get(key)
        if(value === undefined) {
            //不存在存在
            array.push([strs[i]])
            //每次进来每一个key对应一个数组的索引值
            map.set(key,array.length - 1)
        } else {
            //在索引处添加改字符串
            array[value].push(strs[i])
        }

    }
    return array
}