function mySetInterval(delay, callback ) {
     let interval = function () {
         callback()
         setTimeout(interval, delay)
     }

   setTimeout(interval, delay)
}


const log = ()=>{
    console.log(1)
}

mySetInterval(1000,log)
