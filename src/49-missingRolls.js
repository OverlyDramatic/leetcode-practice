/**
 * * Find Missing Observations
 * https://leetcode-cn.com/problems/find-missing-observations/
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const total = mean * (n + rolls.length);
  const sumN = total - sum(rolls);

  if (n > sumN || (n * 6) < sumN) {
    return [];
  }
  
  function sum(rolls) {
    let s = 0;
    for (const i of rolls) {
      s += i;
    }
    return s;
  }

  const base = Math.floor(sumN / n);
  const ratio = sumN % n;
  const nArr = [];
  for (let i = 0; i < n; i++) {
    nArr.push(base + (i < ratio ? 1 : 0))
  }
  return nArr;
};

module.exports = missingRolls;
