/**
 * 给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
 function XXX(str,val){}
 */
function change_chain(str,val) {
    let result = str.split('->').filter(function (num) {
        if (parseInt(num,10) !== val)
            return num;
    });
    return result.join('->');
}
console.log(change_chain("1->2->3->3->4->5->3",3));