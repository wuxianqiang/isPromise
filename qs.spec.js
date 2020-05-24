var isPromise = require('./index')

var promise = {then: function () {}};

it('测试{then: function () {}}是promise函数', () => {
  expect(isPromise(promise)).toBeTruthy()
})

it('测试100不是promise函数', () => {
  expect(isPromise(100)).not.toBeTruthy()
})
