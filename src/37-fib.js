/**
 * * Fibonacci Number https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n
  }
  let count = 1
  let p = 0, q = 1, result = 0
  while (count < n) {
    result = p + q
    p = q
    q = result
    count++
  }
  return result
}

module.exports = fib
