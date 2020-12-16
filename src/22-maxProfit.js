/**
 * * 买卖股票的最佳时机 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // * 解法1
  // let profit = 0
  // const len = prices.length - 1
  // for (let i = 0; i < len; i++) {
  //   if (prices[i] < prices[i + 1]) {
  //     const max = Math.max(...prices.slice(i + 1))
  //     profit = Math.max(profit, max - prices[i])
  //   }
  // }
  // return profit
  // * 解法2
  let buyIn = prices[0]
  let profit = 0
  for (let i of prices) {
    if (i < buyIn) {
      buyIn = i
      continue
    }
    profit = Math.max(profit, i - buyIn)
  }
  return profit
}

module.exports = maxProfit
