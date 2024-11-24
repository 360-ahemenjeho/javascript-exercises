const convertToCelsius = function (temp) {
  if (isNaN(temp)) return
  const res = Number((temp - 32) * (5 / 9))
  return Number.isInteger(res) ? res : parseFloat(res.toFixed(1))
}

const convertToFahrenheit = function (temp) {
  if (isNaN(temp)) return
  const res = Number(temp * (9 / 5) + 32)
  return Number.isInteger(res) ? res : parseFloat(res.toFixed(1))
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}
