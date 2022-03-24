/**
 * * 字典序的第K小数字
 * https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // * 1. 暴力遍历
  // const lexicoArr = [];
  // for (let i = 1; i <= n; i++) {
  //   lexicoArr.push(`${i}`);
  // }
  // lexicoArr.sort((a, b) => a > b ? 1 : -1);
  // return +lexicoArr[k - 1];
  // * 2.字典树 - 官方解法
  let i = 1;
  let ni = 1;
  while (k > i) {
    const steps = getSteps(ni, n);
    if (steps <= k - i) {
      i += steps;
      ni++;
    } else {
      ni = ni * 10;
      i++;
    }
  }
  return ni;

  function getSteps (ni, n) {
    let steps = 0;
    let first = ni;
    let last = ni;
    while (first <= n) {
      steps += Math.min(last, n) - first + 1;
      first = first * 10;
      last = last * 10 + 9
    }
    return steps;
  }
}


module.exports = findKthNumber
