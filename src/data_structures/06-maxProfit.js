/**
 * * Best Time to Buy and Sell Stock
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  let minPrice = prices[0]
  for (const price of prices) {
    max = Math.max(price - minPrice, max)
    minPrice = Math.min(minPrice, price)
  }
  return max
}

module.exports = maxProfit
