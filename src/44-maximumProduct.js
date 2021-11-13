/**
 * * 三个数的最大乘积 https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // * 1 线性扫描 - 找出最大3个数和最小2个数
  // * min1 < min2 < max1 <max2 <max3
  let min1 = (min2 = Number.MAX_SAFE_INTEGER)
  let max1 = (max2 = max3 = -min1)
  for (let x of nums) {
    // * 比较最小值
    if (x < min1) {
      min2 = min1
      min1 = x
    } else if (x < min2) {
      min2 = x
    }
    // * 比较最大值
    if (x > max3) {
      max1 = max2
      max2 = max3
      max3 = x
    } else if (x > max2) {
      max1 = max2
      max2 = x
    } else if (x > max1) {
      max1 = x
    }
  }
  return Math.max(max1 * max2 * max3, min1 * min2 * max3)
  // // * 2 排序 -
}

module.exports = maximumProduct
