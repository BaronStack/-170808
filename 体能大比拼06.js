/**
 * 给定一个未排序的整数数组，找到其中位数。
 */
function medianNumber(arr) {
    arr.sort();
    return (arr.length % 2 === 0) ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 : arr[(arr.length - 1) / 2];
}
console.log('数组[3,5,9,4,2,7,8,4,3] 的中位数是：'+ medianNumber([3,5,9,4,2,7,8,4,3]));