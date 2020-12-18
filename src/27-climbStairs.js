/**
 * * 爬楼梯 https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // * 解法1 - 动态规划
  // const dp = new Array(n).fill(1)
  // dp[1] = 2
  // for (let i = 2; i < n; i++) {
  //   dp[i] = dp[i - 2] + dp[i - 1]
  // }
  // return dp[n - 1]
  // * 解法2 - 动态规划的优化
  let p = 0,
    q = 0,
    r = 1
  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
  // * 通项式 - 大神的解法
  // const sqrt5 = Math.sqrt(5)
  // const fibn =
  //   Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)
  // return Math.round(fibn / sqrt5)
}

module.exports = climbStairs
