class C{
    constructor() {
        this.x=11;
    }
    fun(){
        this.x=3;
    }
    print(){
        console.log(this.x)
    }
}

class D extends C{
    constructor() {
        super();
        this.x=90;
    }
    f(){
        super.fun();
        this.x=5;
        super.print();//5  
        //敲黑板！！！
        //如果此处没有this.x=5 则返回的是3，如果没有3，返回的是90，没有90，返回11
    }
}
