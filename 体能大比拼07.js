/**
 * Created by MYPRO on 2017/8/15.
 */
//函数一
function caculateCount(arr,element) {
    let num = 0;
    arr.map(function (item) {
        if (item === element)
            num ++;
    });
    return num;
}
//函数二
function caculateCount(arr,element) {
    return arr.filter(function (item) {
        if (item === element)
            return item;
    }).length;
}
//函数三
function caculateCount(arr,element) {
    let num = 0;
    arr.forEach(function (item) {
        if (item === element)
            num ++;
    })
    return num;
}

let arr = [1, 3, 7, 1 ,1,4,4,4,4];
let element  = 4;
console.log('ARRAY :[1, 3, 7, 1 ,1,4] has element ' + element + ' count is ' + caculateCount(arr,element));
