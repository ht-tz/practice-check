// class Schecduler {
//     constructor(max) {
//          this.list = [];
//          this.max = max;
//          this.current = 0;
//     }
//     add(time, order) {
//         const promiseGenerator = () =>{
//             return new Promise((resolve, reject) =>{
//                 setTimeout(()=>{
//                      console.log(order);
//                      resolve(); //
//                 },time)
//             })
//         }
//         this.list.push(promiseGenerator)
//     }
//
//     start() {
//         for(let i = 0; i < this.list.length; i++) {
//             this.run()
//         }
//     }
//
//     run() {
//          if(!this.list || !this.list.length || this.current>this.max) return
//
//           this.current ++
//           this.list.shift().then(() =>{
//             this.current--; //
//             this.run();
//           })
//     }
// }
//
// const scheduler = new Scheduler(3);
// const addTask = (time, order) => {
//     scheduler.add(time, order);
// };
// addTask(1000, "1");
// addTask(2000, "2");
// addTask(3000, "3");
// addTask(4000, "4");
// scheduler.start();

let arr = [1,2,34,45]

function a(...args) {
     if (args.length === 1) return args[0]
    let arr = [1,423,445]
     return a(...arr)
}

a()