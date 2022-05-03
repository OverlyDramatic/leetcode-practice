/**
 * * Reorder Data in Log Files
 * https://leetcode-cn.com/problems/reorder-data-in-log-files/
 * @param {string[]} logs
 * @return {string[]}
 */

var reorderLogFiles = function (logs) {
  function getIdAndContent(str) {
    for (let i = 0, len = str.length; i < len; i++) {
      if (str.charAt(i) === ' ') {
        return [str.substring(0, i), str.substring(i + 1)]
      }
    }
    throw str
  }

  const letterLogs = []
  const digitLogs = []

  for (const item of logs) {
    if (/\s\d+$/.test(item)) {
      digitLogs.push(item)
    } else {
      letterLogs.push(item)
    }
  }

  letterLogs.sort((a, b) => {
    const [id_a, content_a] = getIdAndContent(a)
    const [id_b, content_b] = getIdAndContent(b)
    if (content_a > content_b) {
      return 1
    } else if (content_a < content_b) {
      return -1
    } else {
      if (id_a > id_b) {
        return 1
      } else {
        return -1
      }
    }
  })

  return letterLogs.concat(...digitLogs)
}

module.exports = reorderLogFiles
