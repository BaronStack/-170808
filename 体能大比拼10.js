/**
 * 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
 要求：不要使用for，while循环
 */
function findElement(arr,element) {
    let result = [];
    let num = 0;
    arr.filter(function (item) {
        if (item === element) {
            result.push(num);
        }
        num ++;
    });
    return result.join(',');
}
console.log("数组：[1, 3, 7, 1 ,4] 中元素 1 出现的位置是： " + findElement([1, 3,1, 7, 1 ,4, 1],1));