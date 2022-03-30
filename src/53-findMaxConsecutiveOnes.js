/**
 * * Max Consecutive Ones
 * https://leetcode-cn.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // * 1.遍历
  let longestCount = 0
  let currentCount = 0
  while (nums.length) {
    const curNum = nums.shift()
    if (curNum === 1) {
      currentCount++
    } else {
      longestCount = Math.max(longestCount, currentCount)
      currentCount = 0
    }
  }
  return Math.max(longestCount, currentCount)
}

module.exports = findMaxConsecutiveOnes
