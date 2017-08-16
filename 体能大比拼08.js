/**
 * 找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
function findRepeat(arr) {
    let array = [];
    let newArray = [];
    array = arr.filter (function (item) {
        return arr.indexOf(item) !== arr.lastIndexOf(item) ;
    });
    let num = 0;
    for (let item of array) {
        if (num != array.length / 2) {
            newArray.push(item);
            num ++;
        }
    }
    return newArray.join();
}
let arr = ['a','ab','ed','da','a','ed','b'];
console.log('数组：' + arr + '中的重复元素为：'+findRepeat(arr));
