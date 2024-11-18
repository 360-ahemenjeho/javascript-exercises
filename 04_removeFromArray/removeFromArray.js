const removeFromArray = function (arr, ...searchEl) {
  const newArr = []
  arr.forEach((item) => {
    if (!searchEl.includes(item)) newArr.push(item)
  })
  return newArr
}

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray
