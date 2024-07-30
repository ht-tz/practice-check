// class 相当于es5中构造函数
// class 中定义方法时，前后不能加 function，全部定义在 class 的 protopyte 属性中
// class 中定义的所有方法是不可枚举的
// class 中只能定义方法，不能定义对象，变量等
// class 和方法内默认都是严格模式
// es5 中 constructor 为隐式属性

class People{
    constructor(name='wang',age='27'){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} ${this.age} eat food`)
    }
}
//继承父类
class Woman extends People{
    constructor(name = 'ren',age = '27'){
        //继承父类属性
        super(name, age);
    }
    eat(){
        //继承父类方法
        super.eat()
    }
}
let wonmanObj=new Woman('xiaoxiami');
wonmanObj.eat();

// es5 继承先创建子类的实例对象，然后再将父类的方法添加到this上（ Parent.apply(this) ）。
// es6 继承是使用关键字 super 先创建父类的实例对象 this，最后在子类 class 中修改 this 。
