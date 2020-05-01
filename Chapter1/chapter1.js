/*
* 判断结构
*/

// 简单的if 
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current < mid) {
    mid = (current - low) / 2
}
// if-else 结构
var mid = 25;
var high = 50;
var current = 13;
var found = -1;
if(current < mid) {
    mid = (current - low) / 2
} else {
    mid = (current + high) / 2
}

// if-else if 结构
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current < mid) {
    mid = (current-low) / 2
} else if(current > mid) {
    mind = (current + high) / 2 
} else {
    found = current;
}


// switch 语句


/**
 * 循环结构
 */


 // while循环


 // for循环

 // 递归（斐波拉切数列）
function factorial(number) {
    if(number  == 1) {
        return number;
    }
    return number * factorial(number-1)
}
console.log(factorial(4));

/*
* 对象与面向对象编程
*/

function Checking(mount) {
    this,balance = mount; // 属性
    this.deposit = deposit; // 方法
    this.withdraw = withdraw; // 方法
    this.toString = toString(); // 方法
}

// this用于将方法和属性绑定到一个对象的实例上面



function withdraw(amount) {
    if(amount <= this.withdraw) {

    }
}
