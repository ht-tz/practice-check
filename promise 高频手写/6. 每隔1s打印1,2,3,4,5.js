// function delay(i) {
//     return new Promise(res=>{
//         setTimeout(()=>{
//             console.log(i)
//             res()
//         },1000)
//     })
// }
//
// async  function trim() {
//     for (let i = 1; i <6 ; i++) {
//         await  delay(i)
//     }
// }
//
// trim()


for (let i = 0;i<6;i++) {
     setTimeout(()=>{
         console.log(i)
     },i*1000)
}