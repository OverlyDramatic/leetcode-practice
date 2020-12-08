/**
 * * 买卖股票的最佳时机 II https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // * 解法1
  // let buyIn = null
  // let profit = 0
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] <= prices[i + 1]) {
  //     buyIn = buyIn === null ? prices[i] : buyIn
  //   } else {
  //     profit += buyIn === null ? 0 : (prices[i] - buyIn)
  //     buyIn = null
  //   }
  // }
  // return profit
  // * 解法2
  let profit = 0
  for (let i = 0, len = prices.length - 1; i < len; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
}

module.exports = maxProfit
