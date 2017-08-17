/**
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
 要求：不要使用for，while循环
 */
function powArry(arr) {
   return arr.map (function (item) {return Math.pow(item,2);});
}
console.log('[5, 3, 7, 1, 4, 6]每个元素的二次方的结果是：')
console.log( powArry([5, 3, 7, 1, 4, 6]));