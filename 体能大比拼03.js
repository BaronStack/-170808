/**
 * Created by MYPRO on 2017/8/10.
 */
function findNum(arr) {
    let array = 0;
    for(let item of arr) {
        for (let term of arr) {
            if (term === item) {
                array++;
            }
        }
        if (array === 1)
            return item;
        array = 0;
    }
}
let num = [1,3,3,7,5,5,1];
console.log(num + '中只出现一次的数字是 ' + findNum(num));
