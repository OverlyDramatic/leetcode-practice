const mergeTwoLists = require('../src/35-mergeTwoLists')

const testData1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
}

const testData2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
}

const result1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: null,
          },
        },
      },
    },
  },
}

test('mergeTwoLists', () => {
  expect(mergeTwoLists(testData1, testData2)).toStrictEqual(result1)
})
