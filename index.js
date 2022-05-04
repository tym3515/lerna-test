// 用一个栈来存储排序最小值
export function app(arg){
    return arg
}
// export default class MinStack {
//     constructor() {
//         this.stack = [];
//         this.count = 0;
//         this.sortStack = [];
//         this.sortCount = 0;
//     }

//     push(x) {
//         this.stack[this.count++] = x;
//         if(this.sortCount === 0 || x <=this.min()){
//             this.sortStack[this.sortCount++] = x;
//         }
//     }

//     min() {
//         return this.sortStack[this.sortCount -1]
//     }

//     pop() {
//         // 先进行sort栈的删除
//         if(this.top()===this.min()){
//             delete this.sortStack[--this.sortCount]
//         }
//         const res = this.stack[--this.count];
//         delete this.stack[--this.count]
//         return res
//     }

//     top() {
//         return this.stack[this.count-1]
//     }

// }