/**
 * Created by MYPRO on 2017/8/15.
 */
function caculateCount(arr,element) {
    let num = 0;
    arr.map(function (item) {
        if (item === element)
            num ++;
    });
    return num;
}
let arr = [1, 3, 7, 1 ,1,4];
let element  = 1;
console.log('ARRAY :[1, 3, 7, 1 ,1,4] has element ' + element + ' count is ' + caculateCount(arr,element));