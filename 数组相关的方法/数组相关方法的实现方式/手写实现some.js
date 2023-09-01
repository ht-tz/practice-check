Array.prototype.mySome = function(callback,context = null) {
    let arr = this 
    flag = false
    i = 0
    
    for(let i = 0; i < arr.length; i++) {
         if(callback.call(context, arr[i],i,arr)) {
            flag =  true 
            break;
         }
    }

    return flag;
}

 let arr = [1,2,4,4,5] 
  
 let fa = arr.mySome((el,index)=>{
     return el >2
 })

 console.log(fa);