/**
 * 将一个正整数分解质因数。例如：输入90,打印出90=2335
 */
function isPrime(i) {
    for (let num = 2;num < Math.sqrt(i); ++i) {
        if(i % num === 0) {
            return false;
        }
    }
    return true;
}

function decompose(count_num) {
    let result = '';
    let i = 2;
    while (i < count_num) {
        if(count_num % i === 0) {
            if (isPrime(i) === true) {
                result += i;
                count_num = count_num / i;
            }
        }else {
            i++;
        }
    }
    console.log('90='+result+i);
}
decompose(90);