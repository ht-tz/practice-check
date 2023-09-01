/**
 * @description: 计数   TC:O(nlogn)  SC:O(n)
 * @author: JunLiangWang
 * @param {*} strs  给定字符串数组
 * @return {*}
 */
function count(strs){
    /**
     * 该方案使用计数的方式，其基本逻辑与上一算法一致，但上一算法中
     * key为排序后的字符串，这里key为字符串中26个单词的出现次数。当
     * 我们遍历字符串数组元素时，我们首先会初始化一个长度为26的数组所
     * 有元素为0，其中元素位置0-25分别表示单词a-z的出现次数，然后遍历
     * 当前字符串字符，统计a-z单词出现的次数，并以此作为key。
     */

    let recordMap=new Map(),
        outArray=[];
    for(let i=0;i<strs.length;i++){
        // 初始化长度为26的数组且所有元素为0
        let wordCountArray=new Array(26).fill(0);
        // 遍历字符串所有字符，统计单词出现次数
        for(let j=0;j<strs[i].length;j++)wordCountArray[(strs[i].charCodeAt(j)-97)]++;

        let key=wordCountArray.toString();
        let index=recordMap.get(key);
        if(index===undefined){
            outArray.push([strs[i]]);
            recordMap.set(key,outArray.length-1);
        }else{
            outArray[index].push(strs[i]);
        }
    }
    return outArray;
}
