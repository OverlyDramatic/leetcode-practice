/**
 * * 买卖股票的最佳时机含手续费 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 解法1
  // const length = prices.length
  // const dp = new Array(length).fill(null).map(() => new Array(2).fill(0))
  // dp[0][1] = -prices[0]
  // for (let i = 1; i < length; i++) {
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
  //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  // }
  // return dp[length - 1][0]
  // * 解法2
  const length = prices.length
  let [pass, hold] = [0, -prices[0]]
  for (let i = 1; i < length; i++) {
    [pass, hold] = [Math.max(pass, hold + prices[i] - fee), Math.max(hold, pass - prices[i])]
  }
  return pass
}

module.exports = maxProfit
