/**
 * * 如果相邻两个颜色均相同则删除当前颜色
 * https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  // 1
  // const patterns = ['AAA', 'BBB'];
  // let player = 0;
  // let patternIndex = colors.indexOf(patterns[player]);
  // while (patternIndex !== -1) {
  //     colors = colors.slice(0, patternIndex) + colors.slice(patternIndex + 1);
  //     player = +!player;
  //     patternIndex = colors.indexOf(patterns[player]);
  // }
  // return Boolean(player);
  // 2
  // const arr = colors.split('');
  // const win = {
  //   A: 0,
  //   B: 0
  // };
  // let current = arr.shift();
  // let count = 1;
  // while (arr.length) {
  //   const crt = arr.shift();
  //   if (crt === current) {
  //     count++;
  //     if (count >= 3) {
  //       win[current] ++;
  //     }
  //   } else {
  //     current = crt;
  //     count = 1;
  //   }
  // }
  // return Boolean(win.A > win.B);
  // 3
  let win = 0;
  for (let i = 0, len = colors.length - 2; i < len; i++) {
    if (colors.substring(i, i + 3) === 'AAA') {
      win++;
    }
    if (colors.substring(i, i + 3) === 'BBB') {
      win--;
    }
  }
  return win > 0;
}

module.exports = winnerOfGame
