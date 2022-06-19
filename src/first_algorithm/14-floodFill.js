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
  // * dfs
  // const currentColor = image[sr][sc]
  // if (currentColor === color) {
  //   return image
  // }

  // const m = image.length
  // const n = image[0].length

  // dfs(sr, sc)
  // return image

  // function dfs(r, c) {
  //   if (image[r][c] === currentColor) {
  //     image[r][c] = color
  //     r >= 1 && dfs(r - 1, c)
  //     r + 1 < m && dfs(r + 1, c)
  //     c >= 1 && dfs(r, c - 1)
  //     c + 1 < n && dfs(r, c + 1)
  //   }
  // }
  // * bfs
  const taskQueue = []
  // const nodeHash = {}
  const m = image.length
  const n = image[0].length
  const originColor = image[sr][sc]
  if (originColor === color) {
    return image
  }
  taskQueue.push([sr, sc])
  // nodeHash[`r${sr}c${sc}`] = true
  while (taskQueue.length) {
    const [r, c] = taskQueue.shift()
    const nodeColor = image[r][c]
    if (nodeColor === originColor) {
      image[r][c] = color
      // r >= 1 && !nodeHash[`r${r - 1}c${c}`] && taskQueue.push([r - 1, c])
      // r + 1 < m && !nodeHash[`r${r + 1}c${c}`] && taskQueue.push([r + 1, c])
      // c >= 1 && !nodeHash[`r${r}c${c - 1}`] && taskQueue.push([r, c - 1])
      // c + 1 < n && !nodeHash[`r${r}c${c + 1}`] && taskQueue.push([r, c + 1])
      r >= 1 && taskQueue.push([r - 1, c])
      r + 1 < m && taskQueue.push([r + 1, c])
      c >= 1 && taskQueue.push([r, c - 1])
      c + 1 < n && taskQueue.push([r, c + 1])
    }
  }
  return image
}

module.exports = floodFill
