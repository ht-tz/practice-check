const getStrNum = (str)=> {
    let res = str.split('').reduce((pre, next) => {
        pre[next] ? pre[next]++ : 1
        return pre
    },{});
}

const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';

console.log(getStrNum(str));
