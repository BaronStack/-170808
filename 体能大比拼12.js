/**
 * 判断一个字符串中出现次数最多的字符，并统计次数
 例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
 例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */
function includes(result,item) {
    let obj = {};
    for (let term of result) {
        if (term.key === item)
            return term;
    }
    return null;
}
function getResult(result) {
    let newObj = {};
    for (let i  = 0;i < result.length - 1; ++i) {
        if (result[i].count === result[i + 1].count) {
            newObj[`${result[i].key}`] = result[i].count;
            newObj[`${result[i + 1].key}`] = result[i].count;
        } else {
            newObj[`${result[i].key}`] = result[i].count;
            break;
        }
    }
    return newObj;
}
function summary(str) {
    let result = [];
    for (let item of str) {
        let obj = includes(result,item);
        if (obj) {
            obj.count ++;
        } else {
            result.push({key:item,count:1});
        }
    }
    result.sort(function (a,b) {
        return b.count - a.count;
    });
    return getResult(result);
}

console.log('字符串：abcsbaddbizdbas 的次数最多的为：');
console.log(summary('abcsbaddbizdbas'));
console.log('字符串 ：aaaaabbdbdbb 的次数最多的为：');
console.log(summary('aaaaabbdbdbb'));