/**
 * * First Bad Version
 * https://leetcode.cn/problems/first-bad-version/
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let pLeft = 1
    let pRight = n
    while (pLeft < pRight) {
      const pMid = Math.floor((pLeft + pRight) / 2)
      if (isBadVersion(pMid)) {
        pRight = pMid
      } else {
        pLeft = pMid + 1
      }
    }
    return pLeft
  }
}

module.exports = solution
