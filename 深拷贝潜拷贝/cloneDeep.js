function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
function cloneDeep(target,hash = new WeakMap()) {
    let newTarget = Array.isArray(target)?[]:{}
    //不是object 就返回其本身
    if (!isObject(target)) return target;
    if (hash.has(target)) return hash.get(target);
    //symbol
     let symbolKeys = Object.getOwnPropertySymbols(target);
     if (symbolKeys.length) {
         symbolKeys.forEach(el=>{
             if (isObject(target[el])) {
                 newTarget[el] = cloneDeep(target[el],hash)
             } else {
                 newTarget[el] = target[el]
             }
         })
     }
     for (let key in target) {
         if (target.hasOwnProperty(key)) {
             if(isObject( target[key])) {
                  newTarget[key] = cloneDeep(target[key]);
             } else {
                 newTarget[key] = target[key];
             }
         }
     }
     return newTarget;
 }



 let obj = {
     name: "hl",
     book: {
         title: "You Don't Know JS",
         price: "45"
     },
     a1: undefined,
     a2: null,
     a8:Symbol(1),
     a3: 123
 }






 let b = cloneDeep(obj);
 console.log(b);