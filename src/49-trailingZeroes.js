/**
 * * Factorial Trailing Zeroes
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // * 1. 找出5的倍数的个数，以及5的整数幂，5的n次方幂算n个5
  // let count = 0;
  // for (let i = 5; i <= n; i += 5) {
  //   for (let x = i; x % 5 === 0; x /= 5) {
  //     count++;
  //   }
  // }
  // return count;
  // * 2. 优化版
  // const c = Math.floor(n / 5);
  // let count = c;
  // for (let i = 1; Math.pow(5, i + 1) <= n; i++) {
  //   count += Math.floor(c / Math.pow(5, i));
  // }
  // return count;
  // * 3. 最终版
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

module.exports = trailingZeroes
