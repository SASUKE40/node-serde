import b from 'benny'

import { parse } from '../index'

const TEST_JSON_STRING = '{}'

function JSONParse(input: string) {
  return JSON.parse(input)
}

async function run() {
  await b.suite(
    'JSON parse',
    b.add('serde JSON parse', () => {
      parse(TEST_JSON_STRING)
    }),
    b.add('native JSON parse', () => {
      JSONParse(TEST_JSON_STRING)
    }),
    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
