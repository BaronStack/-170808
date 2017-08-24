/**
 * 实现一个left-pad函数
 leftpad功能，就是字符串前面拼指定字符到固定长度，比如
 leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
 三个参数，
 第一个：当前字符串；
 第二个：需要返回字符串的长度
 第三个：用来拼接的字符串
 */
function leftpad(str,count,element) {
    return new Array(count).fill(element,0,count).join('').concat(str);
}
console.log(leftpad('hello',20,'1'));