/**
 * * 最大子序和 https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // * 解法1 - 贪心
  let maxSum = nums[0]
  let currentSum = 0
  for (let i in nums) {
    currentSum += nums[i]
    maxSum = Math.max(maxSum, currentSum)
    if (currentSum <= 0) {
      currentSum = 0
    }
  }
  return maxSum
  // * 解法2 - 动态规划
  // let p = 0, maxSum = nums[0]
  // for (let i of nums) {
  //   p = Math.max(p, i + p)
  //   maxSum = Math.max(maxSum, pre)
  // }
}

module.exports = maxSubArray
