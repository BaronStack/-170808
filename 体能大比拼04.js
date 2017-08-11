/**
 * Created by MYPRO on 2017/8/11.
 */
function change_chain(str,val) {
    let result = str.split('->').filter(function (num) {
        if (parseInt(num,10) !== val)
            return num;
    });
    return result.join('->');
}
console.log(change_chain("1->2->3->3->4->5->3",3));