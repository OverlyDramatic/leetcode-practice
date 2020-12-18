/**
 * * 搜索插入位置 https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i in nums) {
    if (nums[i] === target) {
      return i - 0
    } else if (nums[i] > target) {
      nums.splice(i, 0, target)
      return i - 0
    }
  }
  nums.push(target)
  return nums.length - 1
}

module.exports = searchInsert
