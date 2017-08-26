/**
 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
 如果这个数被3整除，打印fizz.
 如果这个数被5整除，打印buzz.
 如果这个数能同时被3和5整除，打印fizz buzz.
 */
function printFB(num) {
    return (num % 3 === 0 && num % 5 === 0) ? "fizz buzz" : ((num % 3 === 0) ? "fizz" : ((num % 5 === 0) ? "buzz" : null));
}
console.log('num :5 ===>' + printFB(5));
console.log('num :75 ===>' + printFB(75));
console.log('num :63 ===>' + printFB(63));
console.log('num :8 ===>' + printFB(8));