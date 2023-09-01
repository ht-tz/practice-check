/**
 * 描述
 * 请补全JavaScript代码，要求以数组的形式返回字符串参数的所有排列组合。
 * 注意：
 * 1. 字符串参数中的字符无重复且仅包含小写字母
 * 2. 返回的排列组合数组不区分顺序
 * 示例1
 * 输入：
 * _permute('abc')
 * 复制
 * 输出：
 * ['abc','acb','bac','bca','cab','cba']
 */


const permute = string =>{
    const res = [];
    const backTrace = path =>{
        if(path.length === string.length) {
            res.push(path);
            return;
        }
         for (const item of string) {
             if (path.includes(item)) continue;

             backTrace(path+item);
         }
    };

     backTrace('')
    return res;
}