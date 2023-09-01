
function mySetTimeout(fn,t,...args) {
     timer = null 
     timer  = setInterval(()=>{
        fn([...args]);
        clearInterval(timer)

     },t,...args) 
}

mySetTimeout((x)=>{
    console.log(x);
},2000,5,8,9)


// setTimeout((...args)=>{
//     console.log(args)
// },2000,1,2,34)