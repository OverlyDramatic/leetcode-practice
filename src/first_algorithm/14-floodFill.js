/**
 * * Flood Fill
 * https://leetcode.cn/problems/flood-fill/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc]
  if (currentColor === color) {
    return image
  }

  const m = image.length
  const n = image[0].length

  dfs(sr, sc)
  return image

  function dfs(r, c) {
    if (image[r][c] === currentColor) {
      image[r][c] = color
      r >= 1 && dfs(r - 1, c)
      r + 1 < m && dfs(r + 1, c)
      c >= 1 && dfs(r, c - 1)
      c + 1 < n && dfs(r, c + 1)
    }
  }
}

module.exports = floodFill
