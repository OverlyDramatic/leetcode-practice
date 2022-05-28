/**
 * * 704. Binary Search
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length
  let p1 = 0
  let p2 = length - 1

  while (p1 <= p2) {
    const p = Math.floor((p2 + p1) / 2)
    const num = nums[p]
    if (num > target) {
      p2 = p - 1
    } else if (num < target) {
      p1 = p + 1
    } else {
      return p
    }
  }
  return -1
}

module.exports = search
