/**
 * *  最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) {
    return ''
  }
  let _prefix = ''
  let arrlength = strs.length
  let length = strs[0].length
  for (let i = 0; i < length; i++) {
    const _pre = _prefix + strs[0].charAt(i)
    for (let j = 1; j < arrlength; j++) {
      if (strs[j].indexOf(_pre) !== 0) {
        return _prefix
      }
    }
    _prefix = _pre
  }
  return _prefix
}

module.exports = longestCommonPrefix
