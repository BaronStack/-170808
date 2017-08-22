/**
 * 计算两个数组的交数组

 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */
function findCommonElement(arr1,arr2) {
    let result = [];
    ((arr1.length > arr2.length) ? arr2:arr1).forEach(function (item) {
        if (((arr1.length > arr2.length) ? arr1:arr2).includes(item))
            result.push(item);
    });
    return result;
}
console.log('数组:[1, 2, 2, 1,5,7,4,4,3] 和 数组：[2, 2,4]的交数组为');
console.log(findCommonElement([1, 2, 2, 1,5,7,4,4,3],[2, 2,4]));
