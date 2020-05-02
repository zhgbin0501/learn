// 实现list类
function List() {
    this.listSize = 0; // 列表的元素个数
    // this.pos = 0; // 列表的当前位置
    this.length = length; // 列表的长度
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    // this.clear = clear; // 清空列表中的所有元素
    this.find = find; // 查找列表中的元素
    this.toString = toString; // 返回列表的字符串形式
    this.insert = insert; // 在现有的元素中插入新元素
    this.append = append; // 在列表的末尾添加元素
    this.remove = remove; // 从列表中删除元素
    // this.front = front; // 将列表中的当前位置移动到第一个元素
    // this.end = end; // 将列表中的当前位置移动到最后一个元素
    // this.prev = prev; // 将当前位置后移
    // this.next = next; // 将当前位置前移
    // this.hasNext;
    // this.hasPrev;
    // this.currPos = currPos;  // 返回列表的当前位置
    // this.moveTo = moveTo; // 将当前位置移动到指定位置
    // this.getElement = getElement; // 返回当前位置的元素
    this.contains = contains; // 包含的元素列表
}

// 给列表缇娜家元素
function append(ele) {
    return this.dataStore[this.listSize++] = ele;
}

// 从列表中查找元素
function find(ele) {
    for(let i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] == ele) {
            return i;
        }
    }
    return -1;
}

// 从列表中删除元素
function remove(ele) {
    var findAt = this.find(ele);
    if(findAt > -1) {
        this.dataStore.splice(findAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// 查看列表中有多少元素
function length() {
    return this.dataStore.length;
}

// 显示列表中的元素
function toString() {
    return this.dataStore;
}

/**
 * 向列表中插入一个元素
 * params   ele: 插入的元素, after: 插入到那个元素之后
 * return Boolean
 * */ 
function insert(ele, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0 , ele);
        ++this.listSize;
        return true;
    }
    return false;
}

// 判定给定的值是否在列表中
function contains(ele) {
    let dataItem = this.dataStore;
    for(let i = 0; i < dataItem.length; i++) {
        if(dataItem[i] === ele) {
            return true;
        }
    }
    return false;
}

var resultList = new List();
resultList.append('123');
resultList.append('456');
resultList.append('789');
resultList.append('hello');
resultList.remove('789');
resultList.insert('world', 'hello')
console.log(resultList.contains('123'));