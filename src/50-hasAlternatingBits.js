/**
 * * Binary Number with Alternating Bits
 * https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  // * 1.
  let mod = n % 2;
  n = Math.floor(n / 2);
  while (n > 0) {
    const nextMod = n % 2;
    if (mod === nextMod) {
      return false;
    }
    mod = nextMod;
    n = Math.floor(n / 2);
  }
  return true;
};

module.exports = hasAlternatingBits;
