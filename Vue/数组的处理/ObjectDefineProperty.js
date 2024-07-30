const arr = [1,2,3,4,5]
Object.keys(arr).forEach(key =>{
     Object.defineProperty(arr,key,{
         get() {
             console.log('key', key)
         },
         set:function(value) {
             console.log('value', value)
         }
     })
})

arr[0] = 10

arr.push(0)