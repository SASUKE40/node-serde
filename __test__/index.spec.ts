import test from 'ava'

import { parse } from '../index'

test('parse JSON obj', (t) => {
  const jsonObj = {
    test: 1,
  }
  const fixture = JSON.stringify(jsonObj)
  t.deepEqual(parse(fixture), jsonObj)
})

test('parse JSON number', (t) => {
  const jsonNumber = 1
  const fixture = JSON.stringify(jsonNumber)
  t.deepEqual(parse(fixture), jsonNumber)
})

test('parse JSON array', (t) => {
  const jsonArray = [
    {
      test: 1,
    },
  ]
  const fixture = JSON.stringify(jsonArray)
  t.deepEqual(parse(fixture), jsonArray)
})

test('parse JSON error', (t) => {
  const jsonEmptyStr = ''
  const fixture = JSON.stringify(jsonEmptyStr)
  t.deepEqual(parse(fixture), jsonEmptyStr)
})
