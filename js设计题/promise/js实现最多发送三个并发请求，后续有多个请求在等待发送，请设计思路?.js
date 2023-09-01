//js实现最多发送三个并发请求，后续有多个请求在等待发送，请设计思路?


/**
 * js实现最多发送三个并发请求，后续有多个请求在等待发送，请设计思路?
 * 1. 考察项：
 *     数组可能不止杀个元素还可能5,6,7，8.。。。。个元素，可能只推入两个异步请求
 *     要获取大到哪三个并发请求，啥时候请求完，那个回来最快，然后发送第四个请求
 *
 *
 *     思路：给一个令牌，标识这三个请求，每一个请求发送一个令牌， 请求回来之后归还令牌，就可以标识
 *     这个时候不用关注他们那个先那个后，只关注令牌的本身
 *
 *
 *     分析，所需要的数据
 *     1.有一个队列，长度为三 ，并不是由它决定的，二十有令牌的数组长度决定的
 *     2.有一个等待请求的队列
 *     3.有一个获取令牌的方法
 *     4.有一个归还令牌的方法
 *
 */
class TaskQueue {
    constructor(num) {
        this.state = [1,2,3]
        this.list = []
        this.waitList = []
    }

    //获取令牌
    getToken() {
        return this.state.splice(0,1)[0]
    }

    //归还令牌
    backToken(token) {
        this.state.push(token)
    }

    //请求队列 f
    /**
     * @param args 参数
     * @param type 是否push新请求
     */
    pushList(args, type = false) {
        if (type)  {
            this.list = []
        }
        for (let i = 0; i <args.length ; i++) {
            if (this.state.length>0) {
                 let token  = this.getToken()
                let obj  = {
                      token,
                    request: args[i]
                }
                this.list.push(obj)
            } else  {
                this.waitList.push(args[i])
            }
        }
    }

    run() {
        for (let item of this.list) {
            item.request().then(res=>{
                console.log(res)
                this.backToken(item.token)
                if (this.waitList.length>0) {
                    console.log(this.list.length)
                     let wait = this.waitList.splice(0,1)
                    this.pushList(wait,true)
                    console.log(this.list.length)
                    this.run()
                }
            })
        }
    }
}

function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('11111');
        }, 1000)
    })
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('22222');
        }, 2000)
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('33333');
        }, 3000)
    })
}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('44444');
        }, 4000)
    })

}
const tq = new TaskQueue(3)
tq.pushList([f1, f2, f3, f4]);
tq.pushList([f2])
// tq.pushList([f2])
tq.run()