/**
 * Created by MYPRO on 2017/8/9.
 */
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
console.log("斐波纳契数列中第34个数是：" + find_fib(34));
