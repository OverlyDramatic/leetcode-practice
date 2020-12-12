const wiggleMaxLength = require('../src/11-wiggleMaxLength')

test('wiggleMaxLength', () => {
  expect(wiggleMaxLength([1,7,4,9,2,5])).toBe(6)
  expect(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])).toBe(7)
  expect(wiggleMaxLength([1,2,3,4,5,6,7,8,9])).toBe(2)
  expect(wiggleMaxLength([])).toBe(0)
  expect(wiggleMaxLength([0,0])).toBe(1)
})
