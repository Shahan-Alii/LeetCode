/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    let n = nums.length;
    let leftProduct = 1;
    let rightProduct = 1;
    let res = nums[0];

    for (let i = 0; i < nums.length; i++) {


        leftProduct = leftProduct == 0 ? 1 : leftProduct;
        rightProduct = rightProduct == 0 ? 1 : rightProduct;


        leftProduct *= nums[i];
        rightProduct *= nums[n - 1 - i];

        res = Math.max(res, leftProduct, rightProduct)

    }

    return res;

};