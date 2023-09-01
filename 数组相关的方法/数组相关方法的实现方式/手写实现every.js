 Array.prototype.myEvery = function(callback,context = null) {
    let arr = this 
    flag = true
    i = 0
    
    for(let i = 0; i < arr.length; i++) {
         if(!callback.call(context, arr[i],i,arr)) {
            flag =  false 
            break;
         }
    }

    return flag;
}

 let arr = [1,2,4,4,5] 
  
 let fa = arr.myEvery((el,index)=>{
     return el >0
 })

 console.log(fa);