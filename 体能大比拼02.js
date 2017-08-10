/**
 * 查找斐波纳契数列中第 N 个数
 * 所谓的斐波纳契数列是指：
 前2个数是 0 和 1 。
 第 i 个数是第 i-1 个数和第i-2 个数的和。
 斐波纳契数列的前10个数字是：
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
 */

//非递归
function find_fib(num) {
    let fib_num  = [];
    fib_num[0] = 0;
    fib_num[1] = 1;
    fib_num[2] = 1;
    for (let i = 3;i <= 1000; ++i) {
        fib_num[i] = fib_num[i-1] + fib_num[i-2];
    }
    return fib_num[num - 1];
}

//递归
function find_fib(num) {
    if (num === 1)
        return 0;
    else if (num === 2 || num === 3)
        return 1;
    else
        return find_fib(num - 1) + find_fib(num - 2);
}
console.log("斐波纳契数列中第34个数是：" + find_fib(34));