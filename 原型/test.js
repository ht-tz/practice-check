{function myinstanceof(left, right) {
      
     left = left.__proto__;
     right = right.prototype; 
    while(true) {
        if(left === null) {
            return false;
        }

        if(left === right) {
            return true;
        }
        left = left.__proto__
    }
}
console.log( myinstanceof([1,2,3],Array));

}

{
     function mynew(fn,...args) {
         let obj = {}
          Object.setPrototypeOf(obj,  fn.prototype)
          let result = fn.apply(obj,args)
          return result instanceof Object ? result : obj;
        }
        

        function Person(name) {
            this.name = name
        }

        let per = mynew(Person,'zhangsan')
        console.log(per);
}