/**
 * * Move Zeroes https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = nums.length
  while (--index >= 0) {
    if (nums[index] !== 0 && nums[index - 1] === 0) {
      nums.splice(index - 1, 1)
      nums.push(0)
    }
  }
  return nums
}

module.exports = moveZeroes
