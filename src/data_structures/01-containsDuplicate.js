/**
 * * Contains Duplicate
 * https://leetcode.cn/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsTable = {}
  for (const num of nums) {
    if (numsTable[num]) {
      return true
    }
    numsTable[num] = true
  }
  return false
}

module.exports = containsDuplicate
