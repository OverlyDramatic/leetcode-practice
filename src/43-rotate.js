/**
 * * Rotate Array https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // * 1 pop unshift
  while (k-- > 0) {
    nums.unshift(nums.pop())
  }
  return nums
}

module.exports = rotate
