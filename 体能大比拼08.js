/**
 * 找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
function findRepeat(arr) {
    let newArr = arr.filter((elem, index) => arr.lastIndexOf(elem) !== index);

    return [...new Set(newArr)];
}
let arr = ['a','a','ab','ed','da','a','ed','b'];
console.log('数组：' + arr + '中的重复元素为：'+findRepeat(arr));
