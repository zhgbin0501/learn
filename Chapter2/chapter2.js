/**
 * 数组
*/

// 创建数组
var num = [1,12,2,3,4];  
// console.log(num.length);
 
// 读写数组
let newArr = [1,2,5,6,23,1,23,345,12,23];
function getSum(arr) {
    let sum = 0;
    for(let i = 0 , len = arr.length; i < len; i++ ) {
        sum += newArr[i];
    }
    return sum;
}
// console.log(getSum(newArr));

// 由字符串生成数组
var sentence = "the quick brown fox jumped over the lazy dog";

function strToArr() {
    let sentence = "the quick brown fox jumped over the lazy dog";
    let words = sentence.split(' ');
    for(let i = 0; i < words.length; i++) {
        // console.log(words[i]);
    }
}
strToArr();

// 查找元素
let names = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu', 'lisi']
let pos1 = names.indexOf('lisi');
let pos2 = names.lastIndexOf('lisi');
// console.log('pos1', pos1 , 'pos2', pos2);  // pos1:1  pos2: 4

// 数组的字符串表示
let callName = ['zhangsan', 'lisi', 'wangwu', 'zhaoliu'];
let name1 = callName.join(); 
let name2 = callName.toString();
// console.log(name1); // zhangsan, lisi, wangwu, zhaoliu


// 由已有数组创建新数组
let cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer'];
let dmpDept = ['Raymond', 'Cynthia'];
let catArr1 = cisDept.concat(dmpDept);
let catArr2 = cisDept.splice(1, 1 , 'Raymond', 'Cynthia');
// console.log(catArr1, catArr2);

// 为数组添加元素
let res = [1,2,33,3];
res.push(12); // [1,2,33,3,12]
res.unshift('123'); // ['123', 1,2,33,3, 12]

// 从数组中删除元素
let arr1 = [1,2,3,4,5,6,6];
arr1.pop(6); //[1,2,3,4,5,6]
arr1.shift(1); // [2,3,4,5,6]

// 数组排序
function compare(num1, num2) {
    return num1 - num2
}
var  arr2 = [3,1,100, 23,12];
arr2.sort(compare); 
// console.log(arr2);

// 对象中的数组
function weekTemps() {
    this.dataStore = []; // 数据仓库
    this.add = add;  // 添加元素
    this.average = average; // 计算平均数
}

function add(temp) {
    return this.dataStore.push(temp);
}

function average() {
    var total = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i]
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(12);
thisWeek.add(3);
thisWeek.add(100);
// console.log(thisWeek.average());

// 练习1
function stuGrade() {
    this.gradeStore = [];  
    this.addGrade = addGrade;
    this.aveGrade = aveGrade;
}

function addGrade(scare) {
    return this.gradeStore.push(scare);
}

function aveGrade() {
    var total = 0;
    for(var i = 0; i < this.gradeStore.length; i++) {
        total += this.gradeStore[i];
    }
    return total / this.gradeStore.length;
}
let studentGrade = new stuGrade();
studentGrade.addGrade(123);
studentGrade.addGrade(3);
console.log(studentGrade.aveGrade());


// 练习2
var testArr = ['my', 'name', 'is', 'zhang', 'bin']
function sortArr(a, b) {
    if(a > b) {
        return 1
    } else if(a < b) {
        return -1
    } else {
        return 0
    }
}
function lowArr(a, b) {
    if(a > b) {
        return -1
    } else if(a < b) {
        return 1
    } else {
        return 0
    }
}
var highArr = testArr.sort(sortArr);
var lowArrRes = testArr.sort(lowArr);
console.log(highArr, lowArrRes);

