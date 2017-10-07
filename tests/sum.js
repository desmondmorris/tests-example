const assert = require('assert')
const math = require('../src/math')

let x = 1
let y = 2
let expected = 3
let actual = math.sum(x, y)

assert(expected === actual)


x = 4
y = 5
expected = 9
actual = math.sum(x, y)

assert(expected === actual)
