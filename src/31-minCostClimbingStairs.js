/**
 * * 使用最小花费爬楼梯 https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // * 动态规划 - 1
  // const length = cost.length + 1
  // const dp = new Array(length).fill(0)
  // for (let i = 2; i < length; i++) {
  //   dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  // }
  // return dp[length - 1]
  // * 动态规划 - 2 优化
  const length = cost.length + 1
  let result = 0
  let p = 0, q = 0
  for (let i = 2; i < length; i++) {
    result = Math.min(p + cost[i - 2], q + cost[i - 1])
    p = q
    q = result
  }
  return result
}

module.exports = minCostClimbingStairs
