const sumAll = function (x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1 || x === y)
    return 'ERROR'

  const isGreaterX = x > y
  let min = isGreaterX ? y : x
  const max = isGreaterX ? x : y
  let tmp = 0

  while (min <= max) {
    tmp = tmp + min
    min++
  }

  return tmp
}

// Do not edit below this line
module.exports = sumAll
