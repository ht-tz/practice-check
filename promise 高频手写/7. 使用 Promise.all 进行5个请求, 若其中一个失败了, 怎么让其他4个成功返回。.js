// js面试题: 使用 Promise.all 进行5个请求, 若其中一个失败了, 怎么让其他4个成功返回。
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
let p4 = Promise.resolve(4);
let p5 = Promise.reject("error");
let arr = [p1, p2, p3, p4, p5];
// //let all = Promise.all(arr);
// let all = Promise.all(
//     arr.map(
//         (promise 高频手写) => promise 高频手写.catch(
//             (e) => console.log("错误信息: " + e)
//         )
//     )
// );
// all.then(res => {
//     //console.log('res: ', JSON.stringify(res));
//     console.log('res: ', res);
// }).catch(err => console.log('e: ', err));



let na = arr.map(pm=>{
     return pm.then(res=>{
         return res
     }).catch(err=>{
       return err
     })
})
let q1=  Promise.all(na)

q1.then(res =>{
    console.log(res)
},err=>{
    console.log(err)
})