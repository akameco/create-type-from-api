// @flow
const fs = require('fs')
const m = require('.')

test('snapshot', () => {
  const data = fs.readFileSync('./__fixtures__/data.json', 'utf8')
  expect(m(JSON.parse(data))).toMatchSnapshot()
})
