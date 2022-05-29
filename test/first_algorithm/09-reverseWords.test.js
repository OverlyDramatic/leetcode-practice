const reverseWords = require('../../src/first_algorithm/09-reverseWords')

test('reverseWords', () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  )
  expect(reverseWords('God Ding')).toBe('doG gniD')
})
