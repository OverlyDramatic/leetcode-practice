/**
 * *  Two Sum II - Input Array Is Sorted
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // * 1. double pointer
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum > target) {
      j--
    } else if (sum < target) {
      i++
    } else {
      return [i + 1, j + 1]
    }
  }
  return []
}

module.exports = twoSum
