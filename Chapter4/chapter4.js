/**
 * 实现一个栈
*/

function stack() {
    this.dataStore = []; // 使用数组模拟栈中数据
    this.push = push; // 往栈中加入数据
    this.pop = pop; // 将栈中的数据进行删除
    this.peek = peek; // 栈顶元素
    this.top = 0;
}