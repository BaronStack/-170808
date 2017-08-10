/**
 * 给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。eg: function findNum(arr){ ... }
 */
//较为普遍的方法
function findNum(arr) {
    let array = 0;
    for(let item of arr) {
        for (let term of arr) {
            if (term === item) {
                array++;
            }
        }
        if (array === 1)
            return item;
        array = 0;
    }
}

//利用高阶函数实现filter()，过滤相同的元素
function findNum(arr) {
    return arr.filter((elem) => {
            return arr.indexOf(elem) === arr.lastIndexOf(elem);//将相同的元素筛选出来
});
}

//利用按位异或实现
function findNum(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        result = result ^ arr[i];
    }
    return result;
}

let num = [1,3,3,7,5,5,1];
console.log(num + '中只出现一次的数字是 ' + findNum(num));
