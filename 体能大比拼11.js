/**
 * 数组去重
 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */
function unique(arr) {
    let num = 0;
    return arr.filter(function (item) {
        if( arr.indexOf(item) === arr.lastIndexOf(item))
            return item;
    }).concat(arr.filter(function (item) {
        if( arr.indexOf(item,num++) !== arr.lastIndexOf(item))
            return item;
    }));
}
console.log('数组[‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1] 去重后的结果是 ：');
console.log(unique(['s', 'a', 's', 'b', 'a',1,'1',1]));